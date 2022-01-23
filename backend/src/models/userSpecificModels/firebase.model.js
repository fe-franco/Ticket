var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var firebaseSchema = new Schema(
  {

    token: {
      type: String,
      required: false,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true
    },
  },

  { timestamps: true }
);

firebaseSchema.method({
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
module.exports = mongoose.model("firebase", firebaseSchema);
