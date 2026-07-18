import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      name: 'John Doe',
      specialty: 'Strength Training',
      image: 'https://placehold.co/400x400/333/fff?text=John+Doe',
    },
    {
      name: 'Jane Smith',
      specialty: 'Yoga & Flexibility',
      image: 'https://placehold.co/400x400/333/fff?text=Jane+Smith',
    },
    {
      name: 'Mike Johnson',
      specialty: 'Cardio & Endurance',
      image: 'https://placehold.co/400x400/333/fff?text=Mike+Johnson',
    },
  ];

  return (
    <section id="trainers" className="container">
      <h2 className="section-title">Our Trainers</h2>
      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <div key={index} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <p>{trainer.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
