import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';
import { useGetFavoriteProductsQuery, useRemoveFavoriteProductMutation } from '../features/auth/authApiSlice';

const FavoriteProducts = () => {
    const user = useSelector(selectCurrentUser);
    const { data: favorites, isLoading, isError, error } = useGetFavoriteProductsQuery(user?.id);
    const [removeFavorite] = useRemoveFavoriteProductMutation();

    if (isLoading) {
        return <div>Loading favorite products...</div>;
    }

    if (isError) {
        return <div>Error loading favorites: {error.toString()}</div>;
    }

    const handleRemoveFavorite = async (productId) => {
        try {
            await removeFavorite({ userId: user.id, productId }).unwrap();
        } catch (err) {
            console.error('Failed to remove favorite:', err);
        }
    };

    return (
        <div className="favorite-products">
            <h2>Your Favorite Products</h2>
            {favorites?.length === 0 ? (
                <p>You haven't added any products to your favorites yet.</p>
            ) : (
                <ul>
                    {favorites?.map(product => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <button onClick={() => handleRemoveFavorite(product.id)}>
                                Remove from Favorites
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoriteProducts;