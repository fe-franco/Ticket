'use strict'
const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/authorization')
const firebase = require('../../controllers/firebase.controller')

router.delete('/',auth(), firebase.removeUserToken)
router.post('/:token',auth(), firebase.saveUserToken)

module.exports = router
