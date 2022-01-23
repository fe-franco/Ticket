const config = require("../config");
const from = require("../config").twilio.number;

const client = require("twilio")(
  config.twilio.accountSID,
  config.twilio.authToken
);
exports.sendSms = async function (to, body) {
  if (config.env != "prod") return null;
  try {
    let result = await client.messages.create({
      body,
      from,
      to,
    });
    return result;
  } catch (e) {
    return e;
  }
};

exports.sendNotificationViaMail = async function (to, message, type) {};
