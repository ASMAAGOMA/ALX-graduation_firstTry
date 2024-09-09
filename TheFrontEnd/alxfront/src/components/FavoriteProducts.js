import React from 'react';
import { useGetFavoritesQuery } from '../features/favorites/favoritesApiSlice';
import Product from '../features/products/Product';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';

const FavoriteProducts = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const { data: favorites, isLoading, isError, error } = useGetFavoritesQuery(undefined, {
        skip: !isLoggedIn,
    });

    if (!isLoggedIn) {
        return (
            <div className="favorite-products">
                <h2>Your Favorite Products</h2>
                <p>Please <Link to="/login">log in</Link> to view your favorite products.</p>
            </div>
        );
    }

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error?.data?.message || 'Failed to fetch favorites'}</div>;

    return (
        <div className="favorite-products">
            <h2>Your Favorite Products</h2>
            {favorites && favorites.length > 0 ? (
                <div className="products-grid">
                    {favorites.map(product => (
                        <Product key={product._id} productId={product._id} />
                    ))}
                </div>
            ) : (
                <p>You haven't added any favorites yet.</p>
            )}
        </div>
    );
};

export default FavoriteProducts;