const transporter = require("../../services/transporter");
const SendRecoverPassMailBuilder = require("./SendRecoverPassMailBuilder");

module.exports = async function SendRecoverPass({ email, link }) {
  var re = /\S+@\S+\.\S+/;

  if (!re.test(email)) return null;

  const mailOptions = SendRecoverPassMailBuilder({
    email,link
  });

  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
     console.log(error)
    } else {
     console.log("RECOVER PASS")
      
    }
  
  });
};
