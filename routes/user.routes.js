const Router = require('express')

const router = new Router()
const userController = require('../controllers/user.controller')

router.post('/create_user', userController.createUser)
router.get('/all_users', userController.getUsers)
router.get('/one_user/:id', userController.getOneUser)
router.put('/update_user/:id', userController.updateUser)
router.delete('/delete_user/:id', userController.deleteUser)

module.exports = router