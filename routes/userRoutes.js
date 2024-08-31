const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.route('/') //chain crud methods
    .get(userController.getUser) //create
    .post(userController.createUser) //create
    .patch(userController.updateUser) //update
    .delete(userController.deleteUser) //delete

module.exports = router