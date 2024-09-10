import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, isFavorite, onFavoriteClick, onOpenModal }) => {
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
        className={`favorite-button ${isFavorite ? 'favorite' : ''}`} 
        onClick={(e) => {
          e.stopPropagation();
          onFavoriteClick();
        }}
      >
        <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} />
        <span className="sr-only">Favorite</span>
      </button>
    </div>
  );
};

export default ProductCard;