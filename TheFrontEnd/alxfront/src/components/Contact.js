import React from 'react';
import Header from './DashHeader';
import Footer from './DashFooter';
import FormInput from './FormInput';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="page contact-page">
      <Header />
      
      <main className="main-content">
        <h1>Contact Us</h1>
        <section className="contact-content">
          <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.</p>
          <div className="contact-details">
            <h2>Get in Touch</h2>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <a href="https://wa.me/201503930493" target="_blank" rel="noopener noreferrer">
                +201503930493
              </a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <a href="mailto:asmaagadallaah@gmail.com">
                asmaagadallaah@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <a href="https://goo.gl/maps/exampleLink" target="_blank" rel="noopener noreferrer">
                43 Anywhere St. Anycity
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>
            <FormInput label="Name" type="text" id="name" name="name" required={true} />
            <FormInput label="Email" type="email" id="email" name="email" required={true} />
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <Button type="submit" className="submit-button">Send Message</Button>
          </form>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;