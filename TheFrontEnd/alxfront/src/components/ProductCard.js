import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, onFavoriteClick, onOpenModal, isFavoritePage = false }) => {
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onFavoriteClick(product.id);
  };

  return (
    <div className="product-card" onClick={() => onOpenModal(product)}>
      <div className="product-image">
        <img src={`http://localhost:3500/uploads/${product.image}`} alt={product.name} />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-category">{product.category}</p>
      </div>
      <button 
        className={`favorite-button ${isFavoritePage ? 'favorite' : ''}`}
        onClick={handleFavoriteClick}
      >
        <FontAwesomeIcon icon={fasHeart} style={{color: isFavoritePage ? 'red' : 'currentColor'}} />
        <span className="sr-only">{isFavoritePage ? 'Remove from Favorites' : 'Add to Favorites'}</span>
      </button>
    </div>
  );
};

export default ProductCard;