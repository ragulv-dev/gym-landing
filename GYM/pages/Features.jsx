import React from "react";

const Features = () => {
  return (
    <section id="features" className="container">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>24/7 Access</h3>
          <p>
            Workout on your schedule, not ours. The gym is always open for
            members.
          </p>
        </div>
        <div className="feature-card">
          <h3>Pro Trainers</h3>
          <p>
            Our certified personal trainers are here to help you achieve your
            goals.
          </p>
        </div>
        <div className="feature-card">
          <h3>Modern Equipment</h3>
          <p>
            We have a wide range of state-of-the-art cardio and strength
            training equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
