var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var locationSchema = new Schema(
  {
    street: {
      type: String,
      required: false,
      trim: true,
    },
    complement: {
      type: String,
      required: false,
      trim: true,
    },
    number: {
      type: String,
      required: false,
      trim: true,
    },
    state: {
      type: String,
      required: false,
      trim: true,
    },

    city: {
      type: String,
      required: false,
      trim: true,
    },

    postalCode: {
      type: String,
      required: false,
      trim: true,
    },
    lat: {
      type: String,
      required: false,
      trim: true,
    },
    lng: {
      type: String,
      required: false,
      trim: true,
    },
  },

  { timestamps: true }
);

locationSchema.method({
  transform() {
    const transformed = {};
    const fields = [];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});
module.exports = mongoose.model("location", locationSchema);
