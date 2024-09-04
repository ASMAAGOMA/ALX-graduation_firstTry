import { useGetProductsQuery } from './productsApiSlice'
import Product from './Product'

const ProductsList = () => {
  const { data: products, isLoading, isSuccess, isError, error } = useGetProductsQuery()

  let content

  if (isLoading) content = <p>Loading...</p>

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>
  }

  if (isSuccess) {
    const { ids } = products

    content = (
      <div className="product-grid">
        {ids?.length
          ? ids.map(productId => <Product key={productId} productId={productId} />)
          : null}
      </div>
    )
  }

  return content
}

export default ProductsList