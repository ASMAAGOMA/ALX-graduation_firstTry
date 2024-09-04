import { useGetProductsQuery } from "./productsApiSlice"
import Product from './Product'

const ProductsList = () => {

    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductsQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = products

        const tableContent = ids?.length
            ? ids.map(productId => <Product key={productId} productId={productId} />)
            : null

        content = (
            <table className="table table--products">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th product__name">Name</th>
                        <th scope="col" className="table__th product__price">Price</th>
                        <th scope="col" className="table__th product__category">Category</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default ProductsList