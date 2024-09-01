import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/dash">Go back to Dashboard</Link>
        </section>
    )
}
export default NotFound
