import { Link } from 'react-router-dom'

const DashHeader = () => {

    const content = (
        <header className="dash-header">
            <div className="dash-header__container">
                <Link to="/dash">
                    <h1 className="dash-header__title">Cozy Corner Café Dashboard</h1>
                </Link>
                <nav className="dash-header__nav">
                    <Link to="/dash/products" className="dash-header__link">Products</Link>
                    <Link to="/dash/users" className="dash-header__link">Users</Link>
                    <Link to="/dash/orders" className="dash-header__link">Orders</Link>
                </nav>
            </div>
        </header>
    )

    return content
}
export default DashHeader
