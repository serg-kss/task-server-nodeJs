const Router = require('express')
const pic_router = new Router()
const picController = require('../controllers/picture.controller')


pic_router.post('/upload_pic', picController.uploadPic)
pic_router.get('/get_pic', picController.getPictures)

module.exports = pic_router