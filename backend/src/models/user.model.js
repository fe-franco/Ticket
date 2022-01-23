"use strict";
const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const httpStatus = require("http-status");
const APIError = require("../utils/APIError");
const transporter = require("../services/transporter");
const config = require("../config");
const Schema = mongoose.Schema;
const mailBuilder = require("../utils/mailBuilder");
const uuidv1 = require("uuid/v1");
const mongoosePaginate = require("mongoose-paginate-v2");
const firebaseSchema = require("./userSpecificModels/firebase.model").schema;
const locationSchema = require("./userSpecificModels/location.model").schema;
const client = require("twilio")(
  config.twilio.accountSID,
  config.twilio.authToken
);

//const roles = ["medico", "paciente", "fisio", "medico-admin", "admin"];

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: false,
      unique: false,
      lowercase: true,
      sparse: false,
    },
    password: {
      type: String,
      required: false,
      minlength: 4,
      maxlength: 128,
    },
    telephone: {
      type: String,
      required: false,
      minlength: 4,
      maxlength: 128,
    },
    name: {
      type: String,
      maxlength: 50,
    },
    lastName: {
      type: String,
      maxlength: 150,
    },
    birthDate: {
      type: String,
      maxlength: 50,
    },
    activationKey: {
      type: String,
      unique: false,
      sparse: false,
    },
    oAuthSms: {
      type: String,
      unique: false,
      sparse: false,
    },
    sexo: {
      type: String,
    },

    gmail: {
      type: String,
    },
    appleMail: {
      type: String,
    },
    picture: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
    hasCompletedRegistration: {
      type: Boolean,
      default: false,
    },

   /* role: {
      type: String,
      default: "paciente",
      enum: roles,
    },*/

    roles: [{ type: Schema.Types.ObjectId, ref: "role" }],

    thumbnail: {
      type: String,
      required: false,
      trim: true,
    },
    canReciveNotification: {
      type: Boolean,
      default: true,
    },
    notifications: [{ type: Schema.Types.ObjectId, ref: "notification" }],

    firebase: {
      type: firebaseSchema,
    },

    location: {
      type: locationSchema,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function save(next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    this.password = bcrypt.hashSync(this.password);

    return next();
  } catch (error) {
    return next(error);
  }
});

userSchema.post("save", async function saved(doc, next) {
  try {
    const mailOptions = mailBuilder(
      this.email,
      config.hostname,
      this.activationKey
    );

    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Email sent: " + info.response);
    //   }
    // });

    return next();
  } catch (error) {
    return next(error);
  }
});

userSchema.method({
  transform() {
    const transformed = {};
    const fields = [
      "id",
      "name",
      "createdAt",
      "picture",
      "gmail",
      "email",
      "role",

    ];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },

  passwordMatches(password) {
    return bcrypt.compareSync(password, this.password);
  },
});

userSchema.statics = {
 

  checkDuplicateEmailError(err) {
    if (err.code === 11000) {
      var error = new Error("Email already taken");
      error.errors = [
        {
          field: "email",
          location: "body",
          messages: ["Email already taken"],
        },
      ];
      error.status = httpStatus.CONFLICT;
      return error;
    }

    return err;
  },
  async findAndGenerateTokenMail(payload) {
    const { email, password, gmail, telephone, code } = payload;
    console.log(payload);
    if ((!email || !password) && !gmail && (!telephone || !code))
      throw new APIError(
        "Email e senha ou gmail ou telefone devem estar presentes"
      );
    var user;
    if (email) {
      user = await this.findOne({
        email,
        hasCompletedRegistration: true,
      }).exec();
      if (!user)
        throw new APIError(
          `Usuario não associado a ${email}`,
          httpStatus.NOT_FOUND
        );

      const passwordOK = await user.passwordMatches(password);

      if (!passwordOK)
        throw new APIError(`Senha errada`, httpStatus.UNAUTHORIZED);

      if (!user.active)
        throw new APIError(`Usuario não ativado`, httpStatus.UNAUTHORIZED);

      return user;
    } else {
      if (gmail) {
        user = await this.findOne({
          gmail,
          hasCompletedRegistration: true,
        }).exec();
      } else {
        user = await this.findOne({ telephone }).exec();
        if (config.env != "dev") {
          const verify = await client.verify
            .services(config.twilio.verifyServiceSID)
            .verificationChecks.create({
              to: telephone,
              code: code,
            });

          if (!verify.valid) throw new Error("Sms code not valid");
        }
      }
      //login validar token
    }
    if (!user)
      throw new APIError(`Usuario não encontrado`, httpStatus.NOT_FOUND);
    if (!user.active)
      throw new APIError(`Usuario não ativado`, httpStatus.UNAUTHORIZED);
    return user;
  },
  async findAndGenerateTokenPhone(payload) {
    const { telephone } = payload;
    if (!telephone) throw new APIError("telephone must be provided for login");

    const user = await this.findOne({ telephone }).exec();
    if (!user)
      throw new APIError(
        `No user associated with ${telephone}`,
        httpStatus.NOT_FOUND
      );

    return user;
  },

  async preLoginMail(payload) {
    var { email, password } = payload;

    if (!email || !password)
      throw new APIError("MAIL must be provided for Pre login MAIL");

    var user = await this.findOne({ email }).exec();
    if (!user)
      throw new APIError(
        `Usuario não associado a ${email}`,
        httpStatus.NOT_FOUND
      );

    const passwordOK = await user.passwordMatches(password);

    if (!passwordOK)
      throw new APIError(`Senha errada`, httpStatus.UNAUTHORIZED);

    if (!user.active)
      throw new APIError(`Usuario não ativado`, httpStatus.UNAUTHORIZED);

    return user;
  },

  async preLogin(payload) {
    var { telephone, role } = payload;
    if (role !== "paciente" && role !== "delivery") {
      role = "paciente";
    }
    if (!telephone)
      throw new APIError("Telephone must be provided for Pre login");
    var user = await this.findOne({ telephone }).exec();
    if (!user) {
      let activationKey = uuidv1();
      const creatingUser = new this({ telephone, role, activationKey });
      user = await creatingUser.save();
    }

    return user;
  },
};
userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("User", userSchema);
