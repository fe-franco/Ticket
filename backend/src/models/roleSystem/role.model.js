var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var roleSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },

    description: {
      type: String,
      required: false,
      trim: true,
    },

    permissions: [{ type: Schema.Types.ObjectId, ref: "permission" }],
    routes: [{ type: Schema.Types.ObjectId, ref: "route" }],
    
  },
);

roleSchema.method({
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
module.exports = mongoose.model("role", roleSchema);
