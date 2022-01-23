'use strict'

const config = require('../config')
const User = require('../models/user.model')
const passportJWT = require('passport-jwt')

const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

var cookieExtractor = function(req) {
  var token = null;
  if (req && req.cookies)
  {
      token = req.cookies['jwt'];
  }

  return token;
};

const jwtOptionsHeader = {
  secretOrKey: config.secret,
  jwtFromRequest:  ExtractJwt.fromAuthHeaderAsBearerToken()
}
const jwtOptions = {
  secretOrKey: config.secret,
  jwtFromRequest:  cookieExtractor
}

const jwtStrategy = new JwtStrategy(jwtOptions, (jwtPayload, done) => {
  console.log(jwtPayload)
  User.findById(jwtPayload.sub, (err, user) => {
    if (err) {
      return done(err, null)
    }

    if (user) {
      return done(null, user)
    } else {
      return done(null, false)
    }
  })
})


const jwtStrategyHeader = new JwtStrategy(jwtOptionsHeader, (jwtPayload, done) => {
  console.log(jwtPayload)
  User.findById(jwtPayload.sub, (err, user) => {
    if (err) {
      return done(err, null)
    }

    if (user) {
      return done(null, user)
    } else {
      return done(null, false)
    }
  })
})

exports.jwtOptions = jwtOptions
exports.jwt = jwtStrategy
exports.header = jwtStrategyHeader
