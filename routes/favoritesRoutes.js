const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');
const verifyJWT = require('../middleware/verifyJWT');

router.use(verifyJWT); 

router.post('/add', favoritesController.addFavorite);
router.delete('/remove/:productId', favoritesController.removeFavorite);
router.get('/', favoritesController.getFavorites);

module.exports = router;
