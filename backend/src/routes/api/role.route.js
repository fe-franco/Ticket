'use strict'
const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/authorization')
const role = require('../../controllers/role.controller')

router.delete('/:id', auth( ),role.deleteroleController)
router.post('/',role.addroleController)
router.get('/', role.getroleController)
router.put('/:id', auth( ),role.editroleController)
router.post('/addPermission',role.addPermissionToRole)
module.exports = router
