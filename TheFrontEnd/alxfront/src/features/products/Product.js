import { useSelector } from 'react-redux'
import { selectProductById } from './productsApiSlice'

const Product = ({ productId }) => {
  const product = useSelector(state => selectProductById(state, productId))

  if (product) {
    return (
      <div className="product-card">
        <div className="product-image">
          {/* Insert product image here */}
          <img src="/api/placeholder/300/300" alt={product.name} />
        </div>
        <div className="product-details">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-category">{product.category}</p>
        </div>
      </div>
    )
  } else return null
}

export default Product