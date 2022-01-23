var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var permissionSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
      trim: true,
    },

    description: {
      type: String,
      required: false,
      trim: true,
    },

    type: {
      type: String,
      required: false,
      trim: true,
    },

  },
);

permissionSchema.method({
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
module.exports = mongoose.model("permission", permissionSchema);
