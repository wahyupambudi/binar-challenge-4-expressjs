const express = require('express')
const router = express.Router()
const { Get, GetByPK, Insert } = require('../controller/account.controller')
const { CheckPostAccount } = require('../middleware/middleware')

router.get('/', Get)
router.get('/:id', GetByPK)
router.post('/', CheckPostAccount, Insert)
// router.put('/:userId', Update)
// router.delete('/:userId', Delete)


module.exports = router