const Router = require('express')
const auth_router = new Router()
const authController = require('../controllers/auth.controller')

auth_router.post('/authentication', authController.login)

module.exports = auth_router