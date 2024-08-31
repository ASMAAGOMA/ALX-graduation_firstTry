import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Cozy Corner Café!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in the heart of Foo City, Cozy Corner Café offers the perfect blend of comfort and taste. Whether you're here for our freshly brewed coffee, refreshing juices, or delightful cakes, you'll find the ideal space to relax, work, or study.</p>
                <address className="public__addr">
                    Cozy Corner Café<br />
                    123 Brew Lane<br />
                    Foo City, CA 12345<br />
                    <a href="tel:+15555555555">(+20) 555-5555</a>
                </address>
                <br />
                <p>Owner: Emma Brewster</p>
            </main>
            <footer>
                <Link to="/login">Login</Link>
            </footer>
        </section>
    )
    return content
}

export default Public
