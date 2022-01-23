const transporter = require("./transporter");
module.exports = async function sendMessageMail({
  name,path,mail
}) {
  const mailOptions = StartupMailFactory(
    name,mail,path
  );

  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
function StartupMailFactory(name,mail,path){

  return{
      from: `Soluções Ortopédicas`,
  
      to:mail,
      subject: `Olá ${name}! Você recebeu o acesso para usar o APP da Soluções Ortopédicas 🚀 `,
      html:`<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
      <head>
      <title></title>
      <meta charset="utf-8"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css"/>
      <!--<![endif]-->
      <style>
              * {
                  box-sizing: border-box;
              }
      
              body {
                  margin: 0;
                  padding: 0;
              }
      
              a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: inherit !important;
              }
      
              #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
              }
      
              p {
                  line-height: inherit
              }
      
              @media (max-width:620px) {
                  .row-content {
                      width: 100% !important;
                  }
      
                  .image_block img.big {
                      width: auto !important;
                  }
      
                  .stack .column {
                      width: 100%;
                      display: block;
                  }
              }
          </style>
      </head>
      <body style="background-color: #e0e5eb; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e0e5eb;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
      <tbody>
      <tr>
      <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="width:100%;padding-right:0px;padding-left:0px;">
      <div align="center" style="line-height:10px"><img alt="Alternate text" class="big" src="https://i.ibb.co/mHhmnC4/40c07ec7-f513-4f3a-88ad-9ed70109a437.png" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" title="Alternate text" width="600"/></div>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #6720b0; background-image: url('https://i.ibb.co/KwLGHpj/flare.png'); background-position: top center; background-repeat: no-repeat; color: #000000; width: 600px;" width="600">
      <tbody>
      <tr>
      <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:40px;">
      <div style="font-family: sans-serif">
      <div style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif;">
      <p style="margin: 0; font-size: 14px; text-align: center;">Boas notícias ${name},</p>
      </div>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td>
      <div style="font-family: Tahoma, Verdana, sans-serif">
      <div style="font-size: 12px; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
      <p style="margin: 0; font-size: 14px; text-align: center;"><span style="font-size:26px;color:#ffffff;"><strong><span style=""> Você foi convidado para entrar na plataforma Soluções Ortopédicas </span></strong></span></p>
      </div>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="width:100%;padding-right:0px;padding-left:0px;">
      <div align="center" style="line-height:10px"><img alt="Alternate text" src="https://i.ibb.co/vXnRT3s/Captura-de-Pantalla-2021-12-17-a-la-s-03-28-03.png" style="display: block; height: auto; border: 0; width: 150px; max-width: 100%;" title="Alternate text" width="150"/></div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;">
      <div style="font-family: Tahoma, Verdana, sans-serif">
      <div style="font-size: 12px; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
      <p style="margin: 0; font-size: 14px; text-align: center;"><span style="font-size:30px;"><strong>Faça download do nosso aplicativo!</strong></span></p>
      </div>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td style="padding-bottom:20px;padding-left:25px;padding-right:25px;padding-top:10px;">
      <div style="font-family: sans-serif">
      <div style="font-size: 12px; mso-line-height-alt: 18px; color: #555555; line-height: 1.5; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif;">
      <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;">Para ter acesso à plataforma, termine seu cadastro e começe a usar. <br/>Clicando no botão a seguir</span></p>
      </div>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="button_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
      <div align="center">
      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://solucoesortopedicas.com/${path}" style="height:62px;width:192px;v-text-anchor:middle;" arcsize="18%" stroke="false" fillcolor="#e03a3d"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:24px"><![endif]--><a href="https://solucoesortopedicas.com/${path}" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#e03a3d;border-radius:11px;width:auto;border-top:0px solid #2B79A6;border-right:0px solid #2B79A6;border-bottom:4px solid #643CC0;border-left:0px solid #2B79A6;padding-top:5px;padding-bottom:5px;font-family:Nunito, Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:24px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong><span data-mce-style="font-size: 24px; line-height: 48px;" style="font-size: 24px; line-height: 48px;">CADASTRAR</span></strong></span></span></a>
      <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
      </div>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 600px;" width="600">
      <tbody>
      <tr>
      <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="width:100%;padding-right:0px;padding-left:0px;padding-bottom:25px;">
      <div align="right" style="line-height:10px"><img alt="Alternate text" class="big" src="https://i.ibb.co/JvMfNqr/be3f3747-6a4e-4ef0-a162-5f5e43101d8d.png" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" title="Alternate text" width="600"/></div>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 600px;" width="600">
      <tbody>
      <tr>
      <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="0" cellspacing="0" class="empty_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td>
      <div></div>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
      <tbody>
      <tr>
      <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="width:100%;padding-right:0px;padding-left:0px;">
      <div align="center" style="line-height:10px"><img alt="Alternate text" class="big" src="https://i.ibb.co/WWQRY9M/bottomwhite.png" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" title="Alternate text" width="600"/></div>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
      <tbody>
      <tr>
      <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td style="padding-bottom:25px;padding-left:25px;padding-right:25px;padding-top:5px;">
      <div style="font-family: sans-serif">
      <div style="font-size: 12px; mso-line-height-alt: 18px; color: #555555; line-height: 1.5; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif;">
      <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 18px;"> </p>
      <p style="margin: 0; font-size: 14px; text-align: center;">Copyright@2022 - Soluções Ortopédicas</p>
      </div>
      </div>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table><!-- End -->
      </body>
      </html>
      ` 
  }

}