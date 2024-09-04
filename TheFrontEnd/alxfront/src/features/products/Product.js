import { useSelector } from 'react-redux'
import { selectProductById } from './productsApiSlice'

const Product = ({ productId }) => {
    const product = useSelector(state => selectProductById(state, productId))


    if (product) {

        return (
            <tr className="table__row product">
                <td className="table__cell">{product.name}</td>
                <td className="table__cell">${product.price.toFixed(2)}</td>
                <td className="table__cell">{product.category}</td>
            </tr>
        )

    } else return null
}
export default Product