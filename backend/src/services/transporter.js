const nodemailer = require('nodemailer')
const config = require('../config')
var smtpTransport = require('nodemailer-smtp-transport');


// const transporter = nodemailer.createTransport({
//   service: config.transporter.service,
//   auth: {
//     user: config.transporter.email,
//     pass: config.transporter.password
//   }
// })
try{
  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: config.transporter.email,
      pass: config.transporter.password
    }
  }));
}catch (e) {
  console.log("ERRO EMAIL")
}




module.exports = transporter
