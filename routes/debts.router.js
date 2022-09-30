const Router = require('express')

const debt_router = new Router()
const debtController = require('../controllers/debts.controller')


debt_router.get('/all_users_debts', debtController.getDebts)
debt_router.get('/all_users_services', debtController.getServices)
debt_router.post('/create_services', debtController.createService)


module.exports = debt_router