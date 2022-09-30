const Router = require('express')

const debt_router = new Router()
const debtController = require('../controllers/debts.controller')


debt_router.get('/all_users_debts', debtController.getDebts)


module.exports = debt_router