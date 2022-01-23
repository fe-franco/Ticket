require('dotenv').config() // load .env file

module.exports = {
  port: process.env.PORT,
  web_sockets: process.env.SOCKETS,
  app: process.env.APP,
  env: process.env.NODE_ENV,
  secret: process.env.APP_SECRET,
  hostname: process.env.HOSTNAME,
  authMethod: process.env.AUTH_METHOD,
  api_key: process.env.PAGARME_API_KEY,
  twilio: {
    authToken: process.env.TWILIO_AUTH_TOKEN,
    accountSID: process.env.TWILIO_ACCOUNT_SID,
    verifyServiceSID: process.env.TWILIO_SERVICE_VERIFY,
    number: process.env.TWILIO_NUMBER
  },
  mongo: {
  /*  uri: process.env.MONGOURI,
    testURI: process.env.MONGOTESTURI,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS*/
    uri:process.env.MONGOURI_LOCAL,
    user: process.env.MONGO_USER_LOCAL,
    pass: process.env.MONGO_PASS_LOCAL
  },
  stay: {
    responsableNumber: process.env.STAY_RESPONSE_NUMBER
  },
  transporter: {
    service: process.env.TRANSPORTER_SERVICE,
    email: process.env.TRANSPORTER_EMAIL,
    password: process.env.TRANSPORTER_PASSWORD
  }, firebase: {
    uri: process.env.FIREBASE_HOST,
    key: process.env.FIREBASE_API_KEY
  },
  appple: {
    client_id: process.env.APPLE_SIGNIN_CLIENT_ID,
    team_id: process.env.APPLE_SIGNIN_TEAM_ID,
    redirect_uri: '',
    key_id: process.env.APPLE_SIGNIN_KEY_ID,
    scope: 'name%20email',
  }

}
