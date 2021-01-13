import React from 'react';
import BlogList from './BlogList';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(
    `http:///localhost:8000/blogs`
  );
  return (
    <div className='home'>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && blogs && (
        <BlogList blogs={blogs} title='All blogs' />
      )}
    </div>
  );
};

export default Home;
