import React from "react";

const Membership = () => {
  return (
    <section id="membership" className="container">
      <h2 className="section-title">Membership Plans</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Basic</h3>
          <p className="price">
            $29<span>/mo</span>
          </p>
          <p>Full gym access during standard hours.</p>
          <a href="#" className="cta-button-secondary">
            Sign Up
          </a>
        </div>
        <div className="feature-card">
          <h3>Premium</h3>
          <p className="price">
            $49<span>/mo</span>
          </p>
          <p>24/7 gym access and all group classes included.</p>
          <a href="#" className="cta-button-secondary">
            Sign Up
          </a>
        </div>
        <div className="feature-card">
          <h3>VIP</h3>
          <p className="price">
            $99<span>/mo</span>
          </p>
          <p>Premium benefits plus 2 personal training sessions.</p>
          <a href="#" className="cta-button-secondary">
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
};

export default Membership;
