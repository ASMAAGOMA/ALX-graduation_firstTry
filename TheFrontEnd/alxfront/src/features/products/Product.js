import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { selectProductById } from './productsApiSlice';
import { selectCurrentUser, selectIsLoggedIn } from '../../features/auth/authSlice';
import { useAddFavoriteProductMutation, useRemoveFavoriteProductMutation } from '../../features/auth/authApiSlice';
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from '../favorites/favoritesApiSlice';
import { useNavigate } from 'react-router-dom';

const Product = ({ productId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const product = useSelector((state) => selectProductById(state, productId));
    const user = useSelector(selectCurrentUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const navigate = useNavigate();
    
    const [addFavorite] = useAddFavoriteMutation();
    const [removeFavorite] = useRemoveFavoriteMutation();

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (user && user.favorites) {
            setIsFavorite(user.favorites.includes(productId));
        }
    }, [user, productId]);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleFavoriteClick = async (e) => {
        e.stopPropagation();
        if (!isLoggedIn) {
          navigate('/login');
          return;
        }
      
        try {
          if (isFavorite) {
            await removeFavorite(productId).unwrap();
          } else {
            await addFavorite(productId).unwrap();
          }
          setIsFavorite(!isFavorite);
        } catch (err) {
          console.error('Failed to update favorite:', err);
        }
    };
      
    if (!product) return null;

    return (
        <>
            <div className="product-card" onClick={handleCardClick}>
            <div className="product-image">
                    <img src={`http://localhost:3500/uploads/${product.image}`} alt={product.name} />
                </div>
                <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <p className="product-category">{product.category}</p>
                </div>
                <button 
                    className={`favorite-button ${isFavorite ? 'favorite' : ''}`} 
                    onClick={handleFavoriteClick}
                >
                    <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} />
                    <span className="sr-only">Favorite</span>
                </button>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={handleCloseModal}>&times;</button>
                        <div className="modal-content">
                            <img 
                                src={`http://localhost:3500/uploads/${product.image}`} 
                                alt={product.name} 
                                className="modal-image" 
                            />
                            <dl className="modal-product-info">
                                <dt className="modal-product-name">{product.name}</dt>
                                <dt>Price:</dt>
                                <dd className="modal-product-price">${product.price.toFixed(2)}</dd>
                                {product.category && (
                                    <>
                                        <dt>Category:</dt>
                                        <dd>{product.category}</dd>
                                    </>
                                )}
                                <dd className="modal-product-description">{product.description}</dd>
                            </dl>
                        </div>
                        <button 
                            className={`modal-favorite-button ${isFavorite ? 'favorite' : ''}`} 
                            onClick={handleFavoriteClick}
                        >
                            <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} />
                            <span className="sr-only">Favorite</span>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Product;