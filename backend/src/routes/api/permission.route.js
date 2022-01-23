'use strict'
const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/authorization')
const permission = require('../../controllers/permission.controller')

router.delete('/:id', auth( ),permission.deletePermissionController)
router.post('/',permission.addPermissionController)
router.get('/', permission.getPermissionController)
router.put('/:id', auth( ),permission.editPermissionController)
module.exports = router
