var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var routesSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },

    path: {
      type: String,
      required: false,
      trim: true,
    },

    icon: {
      type: String,
      required: false,
      trim: true,
    },

    isButton: {
      type: Boolean,
      required: false,
      trim: true,
    },
  },
);

routesSchema.method({
  transform() {
    const transformed = {};
    const fields = [

    ];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});
module.exports = mongoose.model("routes", routesSchema);
