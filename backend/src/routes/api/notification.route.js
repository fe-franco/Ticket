'use strict'
const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/authorization')
const notification = require('../../controllers/notification.controller')

router.delete('/:id', auth(),notification.deletenotificationController)
router.post('/', auth(),notification.addnotificationController)
router.get('/',auth(), notification.getnotificationController)
router.put('/:id', auth(),notification.editnotificationController)
router.post('/send/',notification.sendNotificationController)
module.exports = router
