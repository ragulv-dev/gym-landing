import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <img src="/logo-gym.png" alt="Elite Fitness Logo" style={{ height: '180px', margin: '-40px 0 -20px 0' }} />
          <p>Train Like a Pro. Unleash your inner strength and become the best version of yourself.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#classes">Classes</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 123 Fitness Lane, Workout City, 12345</p>
          <p>📞 (123) 456-7890</p>
          <p>✉️ info@elitefitness.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Elite Fitness. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
