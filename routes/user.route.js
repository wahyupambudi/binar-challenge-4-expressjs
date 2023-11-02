const express = require('express')
const router = express.Router()
const { Get, Insert, GetByPK, Update, Delete } = require('../controller/user.controller')
const { CheckPostUser } = require('../middleware/middleware')

router.get('/', Get)
router.get('/:userId', GetByPK)
router.post('/', CheckPostUser, Insert)
router.put('/:userId', Update)
router.delete('/:userId', Delete)


module.exports = router