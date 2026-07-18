import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'The Importance of a Good Warm-Up',
      excerpt: 'A good warm-up is crucial for preventing injuries and preparing your body for a workout. In this post, we discuss the best warm-up exercises...',
      image: 'https://placehold.co/600x400/333/fff?text=Warm-Up',
    },
    {
      title: 'Top 5 Exercises for Building Muscle',
      excerpt: 'Looking to build muscle? These top 5 exercises are a must-have in your workout routine. From squats to deadlifts, we cover them all...',
      image: 'https://placehold.co/600x400/333/fff?text=Muscle+Building',
    },
    {
      title: 'Healthy Eating for a Healthier You',
      excerpt: 'Nutrition is just as important as exercise. In this post, we share some tips for healthy eating and provide some delicious and nutritious recipes...',
      image: 'https://placehold.co/600x400/333/fff?text=Healthy+Eating',
    },
  ];

  return (
    <section id="blog" className="container">
      <h2 className="section-title">Our Blog</h2>
      <div className="blog-grid">
        {posts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href="#" className="cta-button-secondary">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
