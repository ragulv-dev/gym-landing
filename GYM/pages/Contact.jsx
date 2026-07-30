import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Have questions? We'd love to hear from you. Reach out to us and we'll get back to you shortly.</p>
          <div className="info-item">
            <span className="icon">📍</span>
            <p><strong>Address:</strong><br/>123 Fitness Lane, Workout City, 12345</p>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <p><strong>Phone:</strong><br/>(123) 456-7890</p>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <p><strong>Email:</strong><br/>info@elitefitness.com</p>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="cta-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
