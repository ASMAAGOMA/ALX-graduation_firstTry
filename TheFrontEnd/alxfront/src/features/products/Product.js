import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProductById } from './productsApiSlice';

const Product = ({ productId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const product = useSelector((state) => selectProductById(state, productId));

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
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
                    </div>
                </div>
            )}
        </>
    );
};

export default Product;