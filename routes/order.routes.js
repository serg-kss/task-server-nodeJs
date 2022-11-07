const Router = require('express')
const order_router = new Router()
const orderController = require('../controllers/order.controller')


order_router.get('/orders', orderController.getOrders)
order_router.post('/create-order', orderController.createOrder)

module.exports = order_router