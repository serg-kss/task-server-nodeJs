const Router = require('express')
const contact_us_router = new Router()
const contactController = require('../controllers/contact.controller')


contact_us_router.get('/contacts', contactController.getMessages)
contact_us_router.post('/save-message', contactController.saveMessage)

module.exports = contact_us_router