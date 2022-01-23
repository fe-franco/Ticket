'use strict'
const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/authorization')
const schNotification = require('../../controllers/schnotiication.controller')

router.put('/cancel/:id',schNotification.cancelSchNotificationController)//INDICAS QUE NOTIFICACION QUERES CANCELAR POR ID
router.post('/',schNotification.addSchNotificationController)//PROGRAMAS UNA NOTIFICACION
router.get('/patientSchNotifications/:id', schNotification.getSchNotificationController)//PEDIS TODAS LAS NOTIFICACIONES SCHEDULEADAS DE UN PACIENTE



module.exports = router
