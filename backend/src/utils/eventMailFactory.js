


module.exports = function eventMailFactory(to,subjectPrefix,eventTitle,eventImage,eventUrl,eventDescription,time,agendaLink,MaratonLeer,clave,cupos){
    
    return {
      from:'noreply',
      to:to,
      subject: `${subjectPrefix}: ${eventTitle}`,
      html:`
      <head>
          <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width">
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <!--<![endif]-->
          <title></title>
          <!--[if !mso]><!-->
          <!--<![endif]-->
          <style type="text/css">
              body {
                  margin: 0;
                  padding: 0;
              }
      
              table,
              td,
              tr {
                  vertical-align: top;
                  border-collapse: collapse;
              }
      
              * {
                  line-height: inherit;
              }
      
              a[x-apple-data-detectors=true] {
                  color: inherit !important;
                  text-decoration: none !important;
              }
          </style>
          <style type="text/css" id="media-query">
              @media (max-width: 920px) {
      
                  .block-grid,
                  .col {
                      min-width: 320px !important;
                      max-width: 100% !important;
                      display: block !important;
                  }
      
                  .block-grid {
                      width: 100% !important;
                  }
      
                  .col {
                      width: 100% !important;
                  }
      
                  .col>div {
                      margin: 0 auto;
                  }
      
                  img.fullwidth,
                  img.fullwidthOnMobile {
                      max-width: 100% !important;
                  }
      
                  .no-stack .col {
                      min-width: 0 !important;
                      display: table-cell !important;
                  }
      
                  .no-stack.two-up .col {
                      width: 50% !important;
                  }
      
                  .no-stack .col.num4 {
                      width: 33% !important;
                  }
      
                  .no-stack .col.num8 {
                      width: 66% !important;
                  }
      
                  .no-stack .col.num4 {
                      width: 33% !important;
                  }
      
                  .no-stack .col.num3 {
                      width: 25% !important;
                  }
      
                  .no-stack .col.num6 {
                      width: 50% !important;
                  }
      
                  .no-stack .col.num9 {
                      width: 75% !important;
                  }
      
                  .video-block {
                      max-width: none !important;
                  }
      
                  .mobile_hide {
                      min-height: 0px;
                      max-height: 0px;
                      max-width: 0px;
                      display: none;
                      overflow: hidden;
                      font-size: 0px;
                  }
      
                  .desktop_hide {
                      display: block !important;
                      max-height: none !important;
                  }
              }
          </style>
      </head>
      
      <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #009aca;">
          <!--[if IE]><div class="ie-browser"><![endif]-->
          <table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #009aca; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#009aca" valign="top">
              <tbody>
                  <tr style="vertical-align: top;" valign="top">
                      <td style="word-break: break-word; vertical-align: top;" valign="top">
                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#009aca"><![endif]-->
                          <div style="background-color:transparent;">
                              <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                      <!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:transparent;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                      <div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;">
                                          <div style="width:100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                  <!--<![endif]-->
                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;" align="center" role="presentation" height="0" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top;" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="0" valign="top"><span></span></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div>
                                              <!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                  </div>
                              </div>
                          </div>
                          <div style="background-color:transparent;">
                              <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #23a9d3;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#23a9d3;background-image:url('');background-position:top left;background-repeat:no-repeat">
                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:#23a9d3"><![endif]-->
                                      <!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:#23a9d3;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;"><![endif]-->
                                      <div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;">
                                          <div style="width:100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                                                  <!--<![endif]-->
                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 45px; width: 100%;" align="center" role="presentation" height="45" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top;" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="45" valign="top"><span></span></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 15px;">
                                                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 15px;" align="center"><![endif]--><img class="center autowidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/573611_555084/logo.png" alt="Alternate text" title="Alternate text" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 448px; display: block;" width="448">
                                                      <div style="font-size:1px;line-height:35px">&nbsp;</div>
                                                      <!--[if mso]></td></tr></table><![endif]-->
                                                  </div>
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                                  <div style="color:#ffffff;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:30px;padding-bottom:10px;padding-left:30px;">
                                                      <div style="line-height: 1.2; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #ffffff; mso-line-height-alt: 14px;">
                                                          <p style="font-size: 34px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 41px; margin: 0;"><span style="font-size: 34px;"><strong>${eventTitle}</strong></span></p>
                                                      </div>
                                                  </div>
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                                  <div style="color:#dddddd;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.8;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
                                                      <div style="line-height: 1.8; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #dddddd; mso-line-height-alt: 22px;">
                                                          <p style="font-size: 14px; line-height: 1.8; text-align: center; word-break: break-word; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 25px; margin: 0;">${eventDescription}</p>
                                                      </div>
                                                  </div>
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                                  <div class="button-container" align="center" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${eventUrl}" style="height:37.5pt; width:191.25pt; v-text-anchor:middle;" arcsize="58%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#009aca; font-family:Tahoma, sans-serif; font-size:20px"><![endif]--><a href="${eventUrl}" target="_blank" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #009aca; background-color: #ffffff; border-radius: 29px; -webkit-border-radius: 29px; -moz-border-radius: 29px; width: auto; width: auto; border-top: 1px solid #ffffff; border-right: 1px solid #ffffff; border-bottom: 1px solid #ffffff; border-left: 1px solid #ffffff; padding-top: 5px; padding-bottom: 5px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:20px;display:inline-block;"><span style="line-height: 24px; word-break: break-word;"><span style="font-size: 20px; line-height: 40px;" data-mce-style="font-size: 20px; line-height: 40px;">Acceder al evento</span></span></span></a>
                                                      <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                                                  </div>
                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;" align="center" role="presentation" height="0" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top;" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="0" valign="top"><span></span></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <div class="img-container center fullwidthOnMobile autowidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                                                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center fullwidthOnMobile autowidth" align="center" border="0" src="${eventImage}" alt="Alternate text" title="Alternate text" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 900px; display: block;" width="900">
                                                      <!--[if mso]></td></tr></table><![endif]-->
                                                  </div>
                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div>
                                              <!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                  </div>
                              </div>
                          </div>
                          <div style="background-color:transparent;">
                              <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                                      <!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:#ffffff;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                      <div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;">
                                          <div style="width:100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                  <!--<![endif]-->
                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;" align="center" role="presentation" height="0" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top;" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="0" valign="top"><span></span></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                                  <div style="color:#58627c;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:30px;padding-bottom:10px;padding-left:30px;">
                                                      <div style="line-height: 1.2; font-size: 12px; color: #58627c; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
                                                          <p style="font-size: 20px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 20px;">Recordatorio de evento: ${time}</span></p>
                                                      </div>
                                                  </div>
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 10px; width: 100%;" align="center" role="presentation" height="10" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top;" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="10" valign="top"><span></span></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div>
                                              <!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                  </div>
                              </div>
                          </div>
                          <div style="background-color:transparent;">
                              <div class="block-grid three-up" style="Margin: 0 auto; min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                                      <!--[if (mso)|(IE)]><td align="center" width="300" style="background-color:#ffffff;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                      <div class="col num4" style="max-width: 320px; min-width: 300px; display: table-cell; vertical-align: top; width: 300px;">
                                          <div style="width:100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                  <!--<![endif]-->
                                                  <div></div>
                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div>
                                              <!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                      <!--[if (mso)|(IE)]></td><td align="center" width="300" style="background-color:#ffffff;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                      <div class="col num4" style="max-width: 320px; min-width: 300px; display: table-cell; vertical-align: top; width: 300px;">
                                          <div style="width:100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                  <!--<![endif]-->
                                                  <div class="img-container center fixedwidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                                                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center fixedwidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/573611_555084/timer-svg.png" alt="Alternate text" title="Alternate text" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 90px; display: block;" width="90">
                                                      <div style="font-size:1px;line-height:15px">&nbsp;</div>
                                                      <!--[if mso]></td></tr></table><![endif]-->
                                                  </div>
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 15px; padding-left: 15px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                                  <div style="color:#58627c;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;">
                                                      <div style="line-height: 1.2; font-size: 12px; color: #58627c; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
                                                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><strong><span style="font-size: 15px;">${time} - ${eventTitle}</span></strong></p>
                                                      </div>
                                                  </div>
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 15px; padding-left: 15px; padding-top: 10px; padding-bottom: 0px; font-family: Tahoma, sans-serif"><![endif]-->
                                                  <div style="color:#848484;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:15px;padding-bottom:0px;padding-left:15px;">
                                                      <div style="line-height: 1.5; font-size: 12px; color: #848484; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px;">
                                                          <p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin: 0;"><span style="font-size: 14px;">El evento empezará en algunos instantes!</span></p>
                                                      </div>
                                                  </div>
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div>
                                              <!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                      <!--[if (mso)|(IE)]></td><td align="center" width="300" style="background-color:#ffffff;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                      <div class="col num4" style="max-width: 320px; min-width: 300px; display: table-cell; vertical-align: top; width: 300px;">
                                          <div style="width:100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                  <!--<![endif]-->
                                                  <div></div>
                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div>
                                              <!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                  </div>
                              </div>
                          </div>
                          <div style="background-color:transparent;">
                              <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                                      <!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:#ffffff;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                      <div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;">
                                          <div style="width:100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                  <!--<![endif]-->
                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;" align="center" role="presentation" height="0" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top;" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="0" valign="top"><span></span></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                                  <div style="color:#58627c;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:30px;padding-bottom:10px;padding-left:30px;">
                                                      <div style="line-height: 1.2; font-size: 12px; color: #58627c; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
                                                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;">Querés ver toda nuestra agenda? <a style="text-decoration: underline; color: #009aca;" href="${agendaLink}" target="_blank" rel="noopener">Entrá a la maratón</a></p>
                                                      </div>
                                                  </div>
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div>
                                              <!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                  </div>
                              </div>
                          </div>
                          <div style="background-color:transparent;">
                              <div class="block-grid three-up" style="Margin: 0 auto; min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #23a9d3;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#23a9d3;background-image:url('');background-position:top left;background-repeat:no-repeat">
                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:#23a9d3"><![endif]-->
                                      <!--[if (mso)|(IE)]><td align="center" width="300" style="background-color:#23a9d3;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                      <div class="col num4" style="max-width: 320px; min-width: 300px; display: table-cell; vertical-align: top; width: 300px;">
                                          <div style="width:100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                  <!--<![endif]-->
                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 10px; width: 100%;" align="center" role="presentation" height="10" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top;" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="10" valign="top"><span></span></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                                  <div style="color:#ffffff;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:20px;">
                                                      <div style="line-height: 1.2; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #ffffff; mso-line-height-alt: 14px;">
                                                          <p style="font-size: 16px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 19px; margin: 0;"><strong>Links</strong></p>
                                                      </div>
                                                  </div>
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                                  <div style="color:#ddd;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.8;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:20px;">
                                                      <div style="line-height: 1.8; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #ddd; mso-line-height-alt: 22px;">
                                                          <p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 25px; margin: 0;"><a style="text-decoration: none; color: #ffffff;" href="https://www.leer.org/donar" target="_blank" rel="noopener">Doná</a></p>
                                                          <p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 25px; margin: 0;"><a style="text-decoration: none; color: #ffffff;" href="https://www.leer.org/" target="_blank" rel="noopener">Fundación Leer</a></p>
                                                          <p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 25px; margin: 0;"><a style="text-decoration: none; color: #ffffff;" href="https://desafio.leer.org/" target="_blank" rel="noopener">Desafio Leer</a></p>
                                                          <p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 25px; margin: 0;"><a style="text-decoration: none; color: #ffffff;" href="${MaratonLeer}" target="_blank" rel="noopener">Maratón Leer</a></p>
                                                      </div>
                                                  </div>
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 10px; width: 100%;" align="center" role="presentation" height="10" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top;" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="10" valign="top"><span></span></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div>
                                              <!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                      <!--[if (mso)|(IE)]></td><td align="center" width="300" style="background-color:#23a9d3;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                      <div class="col num4" style="max-width: 320px; min-width: 300px; display: table-cell; vertical-align: top; width: 300px;">
                                          <div style="width:100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                  <!--<![endif]-->
                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 10px; width: 100%;" align="center" role="presentation" height="10" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top;" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="10" valign="top"><span></span></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                                  <div style="color:#ffffff;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:20px;">
                                                      <div style="line-height: 1.2; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #ffffff; mso-line-height-alt: 14px;">
                                                          <p style="font-size: 16px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 19px; margin: 0;"><strong>Información</strong></p>
                                                      </div>
                                                  </div>
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                                  <div style="color:#ddd;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.8;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:20px;">
                                                      <div style="line-height: 1.8; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #ddd; mso-line-height-alt: 22px;">
                                                          <p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 25px; margin: 0;">&nbsp;</p>
                                                          <p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 25px; margin: 0;">&nbsp;</p>
                                                          <p style="font-size: 14px; line-height: 1.8; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 25px; margin: 0;">info@leer.org.ar <br><br></p>
                                                      </div>
                                                  </div>
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 10px; width: 100%;" align="center" role="presentation" height="10" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top;" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="10" valign="top"><span></span></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div>
                                              <!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                      <!--[if (mso)|(IE)]></td><td align="center" width="300" style="background-color:#23a9d3;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                      <div class="col num4" style="max-width: 320px; min-width: 300px; display: table-cell; vertical-align: top; width: 300px;">
                                          <div style="width:100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                  <!--<![endif]-->
                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 10px; width: 100%;" align="center" role="presentation" height="10" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top;" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="10" valign="top"><span></span></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                                  <div style="color:#ffffff;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:20px;">
                                                      <div style="line-height: 1.2; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #ffffff; mso-line-height-alt: 14px;">
                                                          <p style="font-size: 16px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 19px; margin: 0;"><strong>Maratón 2020</strong></p>
                                                      </div>
                                                  </div>
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                                  <table class="social_icons" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 20px;" valign="top">
                                                                  <table class="social_table" align="left" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top; display: inline-block; text-align: left;" align="left" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 0px;" valign="top"><a href="https://www.facebook.com/fundleer/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-outline-circle-white/facebook@2x.png" alt="Facebook" title="Facebook" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
                                                                              <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 0px;" valign="top"><a href="https://twitter.com/fundacionleer" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-outline-circle-white/twitter@2x.png" alt="Twitter" title="Twitter" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
                                                                              <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 0px;" valign="top"><a href="https://www.instagram.com/fundleer/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-outline-circle-white/instagram@2x.png" alt="Instagram" title="Instagram" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
                                                                              <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 0px;" valign="top"><a href="https://www.linkedin.com/company/fundacionleer/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-outline-circle-white/linkedin@2x.png" alt="LinkedIn" title="LinkedIn" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 10px; width: 100%;" align="center" role="presentation" height="10" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top;" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="10" valign="top"><span></span></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div>
                                              <!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                  </div>
                              </div>
                          </div>
                          <div style="background-color:transparent;">
                              <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                      <!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:transparent;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                      <div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;">
                                          <div style="width:100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                  <!--<![endif]-->
                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                      <tbody>
                                                          <tr style="vertical-align: top;" valign="top">
                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;" align="center" role="presentation" height="0" valign="top">
                                                                      <tbody>
                                                                          <tr style="vertical-align: top;" valign="top">
                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="0" valign="top"><span></span></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div>
                                              <!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                  </div>
                              </div>
                          </div>
                          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                      </td>
                  </tr>
              </tbody>
          </table>
          <!--[if (IE)]></div><![endif]-->
      </body>`
    }
  }