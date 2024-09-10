import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductModal = ({ product, onClose, onFavoriteClick, isFavoritePage }) => {
  if (!product) return null;

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onFavoriteClick(product.id);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="modal-content">
          <img
            className="modal-image"
            src={`http://localhost:3500/uploads/${product.image}`}
            alt={product.name}
          />
          <div className="modal-product-info">
            <h2 className="modal-product-name">{product.name}</h2>
            <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <button 
              className={`favorite-button ${isFavoritePage ? 'favorite' : ''}`}
              onClick={handleFavoriteClick}
            >
              <FontAwesomeIcon icon={faHeart} style={{color: isFavoritePage ? 'red' : 'currentColor'}} />
              <span className="sr-only">{isFavoritePage ? 'Remove from Favorites' : 'Add to Favorites'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;