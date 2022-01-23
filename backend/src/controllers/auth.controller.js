"use strict";

const fs = require("fs");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const config = require("../config");
const httpStatus = require("http-status");
const uuidv1 = require("uuid/v1");
const fetch = require("node-fetch");
const locationModel = require("../models/userSpecificModels/location.model");
const userModel = require("../models/user.model");
const sendMessageMail = require("../services/sendMessageMail");
const client = require("twilio")(
  config.twilio.accountSID,
  config.twilio.authToken
);
const AppleAuth = require("apple-auth");
const SendRecoverPass = require("../mailBuiler/resetPassword/SendRecoverPass");
exports.inviteUser = async (req, res, next) => {
  try {
    const activationKey = uuidv1();
    var body = req.body;

    let userByMail = await userModel.find({ email: req.body.email });
    if (userByMail.length > 0) {
      res.status(httpStatus.CONFLICT);
      res.send({ error: "duplicate", message: "duplicate", key: "email" });
    } else {
      const location = req.body.location;
      body.activationKey = activationKey;
      body.hasCompletedRegistration = false;
      const localtionSchema = new locationModel(location);
      body.location = localtionSchema;
      body.invitedBy = await userModel.findById(req.user.id);

      if(!body.telephone.includes("+55")){
        body.telephone="+55"+body.telephone
      }
      const user = new User(body);
      const savedUser = await user.save();

      sendMessageMail({
        name:savedUser.name,
        path:"page-completar-cadastro/"+savedUser.activationKey,mail:savedUser.email
      })
      res.status(httpStatus.CREATED);
      res.send({ result: "ok", activationKey: savedUser.activationKey });
    }
  } catch (error) {
    return next(User.checkDuplicateEmailError(error));
  }
};
exports.getUserDataActivate = async (req, res, next) => {
  try {
    const id = req.params.id;

    var pacientes = await User.findOne({
      activationKey: id,
      hasCompletedRegistration: false,
    });

    return res.json(pacientes);
  } catch (error) {
    next(error);
  }
};
exports.preResetPass = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const oAuthSms = uuidv1();
    user.oAuthSms = oAuthSms;
    if (user) {
      await user.save();
      if (config.env != "dev") {
        var verify = await client.verify
          .services(config.twilio.verifyServiceSID)
          .verifications.create({ to: user.telephone, channel: "sms" });
      } else {
        var verify = { status: null };
      }
    }

    return res.json({
      message: "OK",
      verify: verify.status ? { status: verify.status } : null,
      oAuthSms,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.recoverPass = async (req, res, next) => {
  try {
    let { email } = req.body;
    if (!email || email == "") throw new Error("Usuario nao existe");

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        message: "OK",
      });
    }

    user.activationKey=uuidv1()
    user.hasCompletedRegistration=false;
  SendRecoverPass({email:email,link:`${config.hostname}/page-completar-cadastro/${user.activationKey}`})
    await user.save()
    return res.json({
      message: "OK",
    });


  } catch (error) {
    next(error);
  }
};


exports.preLoginEmail = async (req, res, next) => {
  try {
    const user = await User.preLoginMail(req.body);
    if (!user)
      return res.json({
        error: "Usuario no encontrado",
      });

    const oAuthSms = uuidv1();
    user.oAuthSms = oAuthSms;
    await user.save();

    if (config.env != "dev") {
      var verify = await client.verify
        .services(config.twilio.verifyServiceSID)
        .verifications.create({ to: user.telephone, channel: "sms" });
    } else {
      var verify = { status: null };
    }
    return res.json({
      message: "OK",
      verify: verify.status ? { status: verify.status } : null,
      oAuthSms,
      telephone: user.telephone,
      user: user.transform()
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.loginGmail = async (req, res, next) => {
  try {
    const resultado = await fetch(
      "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" +
        req.body.tokenId
    );
    let { email } = await resultado.json();
    if (!email || email == "") throw new Error("Usuario não existe");

    const user = await User.findOne({ gmail: email }).populate("invitedBy");
  if (!user) throw new Error("Usuario não existe");
    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.secret);
    res.setHeader("Access-Control-Allow-Credentials", true);
    return res.json({
      message: "OK",
      token: token,
      user: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.appleAuth = async (req, res) => {
  const { token: appleToken, email: email } = req.body;
  console.log(email);
  try {
    // Get Apple Data from AccessToken

    const appleAuthObj = new AppleAuth(
      {
        client_id: process.env.APPLE_SIGNIN_CLIENT_ID,
        team_id: process.env.APPLE_SIGNIN_TEAM_ID,
        redirect_uri: "",
        key_id: process.env.APPLE_SIGNIN_KEY_ID,
        scope: "name%20email",
        keyFile: `${__dirname}/../config/AuthKey_5ZW36WRPU6.p8`,
      },
      fs
        .readFileSync(`${__dirname}/../config/AuthKey_5ZW36WRPU6.p8`)
        .toString(),
      "text"
    );

    const apple = await appleAuthObj.accessToken(appleToken);

    const appleData = jwt.decode(apple.id_token);

    console.log(appleData);

    var user = await User.findOne({ appleMail: appleData.email }).populate(
      "invitedBy"
    );
     if (!user) {throw new Error("Usuario não existe");}

    const payload = { sub: user.id||user._id };
    const token = jwt.sign(payload, config.secret);
    res.setHeader("Access-Control-Allow-Credentials", true);

    return res.json({
      message: "OK",
      token: token,
      user: user,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message || err });
  }
};



exports.getActKey = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.params.email });

    return res.json({ activationKey: user.activationKey || "" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.preAuthresetPass = async (req, res, next) => {
  try {
    const user = await User.findOne({ oAuthSms: req.body.oAuthSms }).populate(
      "invitedBy"
    );

    if (!user) throw new Error("Email ou códio SMS inválido");

    if (config.env != "dev") {
      const verify = await client.verify
        .services(config.twilio.verifyServiceSID)
        .verificationChecks.create({
          to: user.telephone,
          code: req.body.code,
        });

      if (!verify.valid) throw new Error("Còdio errado");
    }
    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.secret);
    res.setHeader("Access-Control-Allow-Credentials", true);
    //   res.cookie("jwt", token, {
    //   maxAge: 99999999999,
    //   httpOnly: false,
    //   sameSite: "Strict",
    // });
    user.oAuthSms = undefined;
    await user.save();
    return res.json({
      message: "OK",
      token: token,
      user: user,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.resetPass = async (req, res, next) => {
  try {
    user.password = req.body.password;
    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.secret);
    res.setHeader("Access-Control-Allow-Credentials", true);

    await user.save();
    return res.json({
      message: "OK",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.TryLoginConfirmPhone = async (req, res, next) => {
  try {
    const user = await User.findOne({ oAuthSms: req.body.oAuthSms }).populate(
      "invitedBy"
    );

    if (!user) throw new Error("Usuario não existe");

    if (config.env != "dev") {
      const verify = await client.verify
        .services(config.twilio.verifyServiceSID)
        .verificationChecks.create({
          to: user.telephone,
          code: req.body.code,
        });

      if (!verify.valid) throw new Error("Sms code not valid");
    }
    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.secret);
    res.setHeader("Access-Control-Allow-Credentials", true);

    user.oAuthSms = "";
    await user.save();
    return res.json({
      message: "OK",
      token: token,
      user: user,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.verify = async (req, res, next) => {
  try {
    console.log(req.user);
    let userT = new User(req.user);
  
    res.json({ result: "ok", user: userT.transform() });
  } catch (error) {
    next(error);
  }
};


exports.completeRegistration = async (req, res, next) => {
  try {
    const { tokenIdGoogle, password, tokenIdApple ,tokenId} = req.body;
    const id = req.params.id;
    if (!password && !tokenIdGoogle && !tokenIdApple && !tokenId)
      throw new Error("Verificar todos os dados");

    var user = await User.findOne({ activationKey: id }).populate("invitedBy");
    if (user.hasCompletedRegistration) throw new Error("Usuario já registrado");
    console.log(password, typeof password);

    if (tokenIdGoogle || tokenId) {
      const resultUser = await fetch(
        "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" +
          tokenIdGoogle || tokenId
      );
      let { name, picture, email, ...rest } = await resultUser.json();

      user.picture = picture;
      user.gmail = email;
    } else {
      if (tokenIdApple) {
        const appleAuthObj = new AppleAuth(
          {
            client_id: process.env.APPLE_SIGNIN_CLIENT_ID,
            team_id: process.env.APPLE_SIGNIN_TEAM_ID,
            redirect_uri: "",
            key_id: process.env.APPLE_SIGNIN_KEY_ID,
            scope: "name%20email",
            keyFile: `${__dirname}/../config/AuthKey_5ZW36WRPU6.p8`,
          },
          fs
            .readFileSync(`${__dirname}/../config/AuthKey_5ZW36WRPU6.p8`)
            .toString(),
          "text"
        );

        const apple = await appleAuthObj.accessToken(tokenIdApple);

        const appleData = jwt.decode(apple.id_token);
        let email = appleData.email;

        //completar con otros datos tipo nombre
        user.appleMail = email;
      }
      user.password = password;
    }
    user.hasCompletedRegistration = true;

    await user.save();
    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.secret);
    res.setHeader("Access-Control-Allow-Credentials", true);

    res.status(httpStatus.OK);
    res.send({ user: user, token });
  } catch (error) {
    console.log(error);
    return next(User.checkDuplicateEmailError(error));
  }
};

exports.getAllUsersAdmin = async (req, res, next) => {
  try {
    const options = {
      select: ["-card_hash", "-transaction", "-client.password"],
      page: req.query.page || 1,
      limit: req.query.size || 20,
    };
    if (req.query.role == "delivery") {
      var usuarios = await userModel.paginate(
        { role: req.query.role, hasCompletedRegistrationDelivery: true },
        options
      );
    } else {
      var usuarios = await userModel.paginate(
        { role: req.query.role, hasCompletedRegistrationClient: true },
        options
      );
    }

    res.json(usuarios);
  } catch (error) {
    next(error);
  }
};

