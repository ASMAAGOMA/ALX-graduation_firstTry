const User = require('../models/User');
const Product = require('../models/Product');

const favoritesController = {
    addFavorite: async (req, res) => {
        try {
            const { productId } = req.body;
            const userId = req.user?._id;  // Check if req.user exists

            if (!userId) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Check if product exists (optional but recommended)
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            if (!user.favorites.includes(productId)) {
                user.favorites.push(productId);
                await user.save();
            }

            return res.status(200).json({ message: 'Product added to favorites' });
        } catch (error) {
            console.error('Error adding favorite:', error);
            return res.status(500).json({ message: 'Error adding product to favorites' });
        }
    },

    removeFavorite: async (req, res) => {
        try {
            const { productId } = req.params;
            const userId = req.user?._id;  // Check if req.user exists

            if (!userId) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Check if product exists (optional but recommended)
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            await User.findByIdAndUpdate(userId, { $pull: { favorites: productId } });

            return res.status(200).json({ message: 'Product removed from favorites' });
        } catch (error) {
            console.error('Error removing favorite:', error);
            return res.status(500).json({ message: 'Error removing product from favorites' });
        }
    },

    getFavorites: async (req, res) => {
        try {
            const userId = req.user?._id;  // Check if req.user exists

            if (!userId) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            const user = await User.findById(userId).populate('favorites');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.status(200).json(user.favorites);
        } catch (error) {
            console.error('Error fetching favorites:', error);
            return res.status(500).json({ message: 'Error fetching favorite products' });
        }
    }
};

module.exports = favoritesController;
