const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/userController')
const favoritesControllers = require('../controllers/favoritesController')
const auth = require('../middleware/verifyJWT')

// User routes
router.route('/')
    .get(usersControllers.getUsers)
    .post(usersControllers.createUser)
    .patch(usersControllers.updateUser)
    .delete(usersControllers.deleteUser)

// Favorites routes
router.route('/favorites')
    .get(auth, favoritesControllers.getFavorites)
    .post(auth, favoritesControllers.addFavorite);

router.route('/favorites/:productId')
    .delete(auth, favoritesControllers.removeFavorite)

module.exports = router