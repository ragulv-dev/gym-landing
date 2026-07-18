import React from 'react';

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Us</h2>
      <div className="about-content">
        <img src="https://placehold.co/600x400/333/fff?text=Our+Story" alt="Our Story" />
        <div>
          <h3>Our Story</h3>
          <p>
            Founded in 2010, Powerhouse Gym has been dedicated to helping people from all walks of life achieve their fitness goals. We believe that a healthy body leads to a healthy mind, and we strive to create a supportive and motivating environment for our members.
          </p>
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide a world-class fitness experience with top-of-the-line equipment, expert trainers, and a strong sense of community. We are committed to helping you unleash your inner strength and become the best version of yourself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
