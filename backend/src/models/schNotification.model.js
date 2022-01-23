var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const types = ["edu","preop","posop","nps","eva"];
var schNotificationSchema = new Schema(
  {
    to: {
      type: String,
      required: false,
      trim: true,
    },
    scheduledDate: {
      type: String,
    },
    startDate:{
      type: String,
    },
    nextDate:{
      type:String,
    },
    endDate:{
      type:String
    },
    frequency:{
      type:Number,
    },
    body: {
      type: String,
     
    },
    title:{
      type: String,
    },
    sent:{
      type:Boolean,
      default:false
    },
    canceled:{
      type:Boolean,
      default:false,
    },

    type: {
      type: String,
      enum: types,
    },
  },

  { timestamps: true }
);

schNotificationSchema.method({
  transform() {
    const transformed = {};
    const fields = [];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});
module.exports = mongoose.model("schNotification", schNotificationSchema);
