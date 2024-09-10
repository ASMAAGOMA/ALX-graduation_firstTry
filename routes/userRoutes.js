const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/userController')
const favoritesControllers = require('../controllers/favoritesController')
const auth = require('../middleware/verifyJWT')

// User routes
router.route('/')
    .get(auth, usersControllers.getUsers)
    .post(auth, usersControllers.createUser)
    .patch(auth, usersControllers.updateUser)
    .delete(auth, usersControllers.deleteUser)

// Favorites routes
router.route('/favorites')
    .get(auth, favoritesControllers.getFavorites)
    .post(auth, favoritesControllers.addFavorite);

router.route('/favorites/:productId')
    .delete(auth, favoritesControllers.removeFavorite)

module.exports = router