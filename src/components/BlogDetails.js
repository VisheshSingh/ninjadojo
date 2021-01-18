import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(
    `http:///localhost:8000/blogs/${id}`
  );
  return (
    <div className='blog-details'>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.description}</div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
