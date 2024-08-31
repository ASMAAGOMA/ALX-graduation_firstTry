import { Link } from 'react-router-dom'

const Welcome = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('ar-EG', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p className="welcome__date">{today}</p>

            <h1>Welcome to Cozy Corner Café!</h1>

            <p><Link to="/menu">Browse Our Menu</Link></p>

            <p><Link to="/specials">View Special Offers</Link></p>

        </section>
    )

    return content
}
export default Welcome
