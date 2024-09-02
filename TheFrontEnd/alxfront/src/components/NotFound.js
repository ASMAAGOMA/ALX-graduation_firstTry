import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/">Go back to Home</Link>
        </section>
    )
}
export default NotFound
