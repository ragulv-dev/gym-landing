import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      name: 'John Doe',
      specialty: 'Strength Training',
      image: 'https://images.stockcake.com/public/b/6/1/b61885ed-5b9b-4086-bc3c-390d0af9b5e4_large/strength-through-shadow-stockcake.jpg',
    },
    {
      name: 'Jane Smith',
      specialty: 'Yoga & Flexibility',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop',
    },
    {
      name: 'Mike Johnson',
      specialty: 'Cardio & Endurance',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop',
    },
  ];

  return (
    <section id="trainers" className="container">
      <h2 className="section-title">Our Trainers</h2>
      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <div key={index} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} />
            <div className="card-content">
              <h3>{trainer.name}</h3>
              <p>{trainer.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
