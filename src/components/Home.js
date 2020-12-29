import React from 'react';

const Home = () => {
  const handleClick = () => {
    console.log('clicked!!!');
  };
  const handleClickBtn = (param, e) => {
    console.log(param, e.target);
  };

  return (
    <div className='home'>
      <h2>Home</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickBtn('again', e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
