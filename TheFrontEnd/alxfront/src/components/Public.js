import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faCoffee } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">
          <FontAwesomeIcon icon={faCoffee} />
          <span>Cozy Corner Café</span>
        </div>
        <nav>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="login-button">Login</Link>
        </nav>
      </header>
      
      <main className="main-content">
        <section className="hero">
          <h1>Welcome to Cozy Corner Café</h1>
          <p className="tagline">Keep calm and grab coffee</p>
          <a href="#" className="cta-button">Order Now</a>
        </section>
        
        <section className="features">
          <div className="feature">
            <FontAwesomeIcon icon={faCoffee} />
            <h2>Premium Coffee</h2>
            <p>Enjoy our selection of locally roasted, artisanal coffee blends.</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <h2>Cozy Atmosphere</h2>
            <p>Relax in our warm, inviting space designed for comfort.</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faEnvelope} />
            <h2>Weekly Specials</h2>
            <p>Subscribe to our newsletter for exclusive offers and events.</p>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="contact-info">
          <p><FontAwesomeIcon icon={faPhone} /> +2234-333-560</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> coffeeshop@gmail.com</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 43 Anywhere St. Anycity</p>
        </div>
        <p className="copyright">&copy; 2024 Cozy Corner Café. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
