const express = require('express')
const router = express.Router()
const { Get, GetByPK, Insert, Update, Delete } = require('../controller/account.controller')
const { CheckPostAccount } = require('../middleware/middleware')

router.get('/', Get)
router.get('/:id', GetByPK)
router.post('/', CheckPostAccount, Insert)
router.put('/:id', Update)
router.delete('/:id', Delete)


module.exports = router