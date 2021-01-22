import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: blog, isPending, error } = useFetch(
    `http:///localhost:8000/blogs/${id}`
  );
  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.ok) {
          history.push('/');
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className='blog-details'>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.description}</div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
