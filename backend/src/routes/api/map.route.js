'use strict'
const express = require('express')
const router = express.Router()
const map = require('../../controllers/map.controller')

router.get('/autocomplete/:adress', map.getAutoComplete)
router.get('/place/:placeId', map.getPlaceById)
router.get('/waypoints/:origin/:destination', map.getWaypoints)

module.exports = router
