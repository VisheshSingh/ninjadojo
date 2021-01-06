import React from 'react';

const BlogList = ({ blogs, title, deleteBlog }) => {
  return (
    <div>
      <h2>{title}:</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => deleteBlog(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
