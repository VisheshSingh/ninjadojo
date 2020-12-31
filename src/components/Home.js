import React, { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Welcome to the new blog',
      body: 'lorem ipsum...',
      author: 'mario',
    },
    {
      id: 2,
      title: 'Master React hooks',
      body: 'lorem ipsum...',
      author: 'luigi',
    },
    {
      id: 3,
      title: 'How to output lists in react',
      body: 'lorem ipsum...',
      author: 'mario',
    },
  ]);

  return (
    <div className='home'>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
