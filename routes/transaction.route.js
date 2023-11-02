const express = require('express')
const router = express.Router()
// const { Get, Insert, GetByPK, Update, Delete } = require('../controller/transaction.controller')
const {Get, Insert, GetByPK} = require('../controller/transaction.controller')
const { CheckPostTransaction } = require('../middleware/middleware')

router.get('/', Get)
router.get('/:id', GetByPK)
router.post('/', CheckPostTransaction, Insert)
// router.put('/:transaction', Update)
// router.delete('/:transaction', Delete)
module.exports = router