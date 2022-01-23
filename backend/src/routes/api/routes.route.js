'use strict'
const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/authorization')
const routes = require('../../controllers/routes.controller')

router.delete('/:id', auth( ),routes.deleteroutesController)
router.post('/',routes.addroutesController)
router.get('/', routes.getroutesController)
router.put('/:id', auth( ),routes.editroutesController)
module.exports = router
