import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'The Importance of a Good Warm-Up',
      excerpt: 'A good warm-up is crucial for preventing injuries and preparing your body for a workout. In this post, we discuss the best warm-up exercises...',
      image: '/blog_1.png',
    },
    {
      title: 'Top 5 Exercises for Building Muscle',
      excerpt: 'Looking to build muscle? These top 5 exercises are a must-have in your workout routine. From squats to deadlifts, we cover them all...',
      image: 'https://downpic.cc/photos/shutter/Downpic.cc-2291829397.jpg',
    },
    {
      title: 'Mastering Muscle Recovery: Rest Days Matter',
      excerpt: 'Pushing hard in the gym is only half the battle. Discover why prioritizing sleep, nutrition, and active recovery is the real secret to unlocking your peak physical performance...',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop',
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
