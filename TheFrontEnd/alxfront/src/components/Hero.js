import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to Cozy Corner Café</h1>
      <p className="tagline">Keep calm and grab coffee</p>
      <Link to="/order" className="cta-button">Order Now</Link>
    </section>
  );
};

export default Hero;
