import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Have questions? We'd love to hear from you. Reach out to us and we'll get back to you shortly.</p>
          <p><strong>Address:</strong> 123 Fitness St, Workout City, 12345</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> info@powerhousegym.com</p>
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
