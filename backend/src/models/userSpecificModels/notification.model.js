var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var notificationSchema = new Schema(
  {
    to: {
      type: String,
      required: false,
      trim: true,
    },

    priority: {
      type: String,
      required: false,
      trim: true,
    },
    data: {
      type: Object,//Enviar SI o SI objecto pedido:{}
    },
    notification: {
      type: Object,
     
    },
  },

  { timestamps: true }
);

notificationSchema.method({
  transform() {
    const transformed = {};
    const fields = [];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});
module.exports = mongoose.model("notification", notificationSchema);
