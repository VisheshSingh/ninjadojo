import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('mario');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, description, author };
    console.log({ blog });

    fetch(`http://localhost:8000/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201 && res.ok) {
          history.push('/');
        }
      })
      .catch((err) => console.log(err.message));
    setTitle('');
    setDescription('');
    setAuthor('mario');
  };

  return (
    <div className='create'>
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='mario'>Mario</option>
          <option value='luigi'>Luigi</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
  );
};

export default Create;
