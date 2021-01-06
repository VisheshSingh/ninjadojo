import React, { useState } from 'react';
import BlogList from './BlogList';

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

  const onDelete = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All blogs' deleteBlog={onDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'mario')}
        title="Mario's blogs"
      />
    </div>
  );
};

export default Home;
