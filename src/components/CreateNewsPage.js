import React, { useState } from 'react';
import { newsService } from '../services/NewsService';

const styles = {
  container: {
    padding: '2rem',
  },
  label: {
    display: 'block',
    marginBottom: '.5rem',
    fontSize: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '0.5rem',
    height: '150px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '1rem',
    fontSize: '1rem',
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
  }
};

const CreateNewsPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePath, setImagePath] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      if (image) setImagePath(image.path);

      await newsService.createNews({title,content,imagePath});
      alert('News created successfully!');
      setTitle('');
      setContent('');
      setImage(null);
    } catch (error) {
      console.error("Failed to create news:", error);
      alert('Failed to create news.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Create News</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" style={styles.label}>Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="content" style={styles.label}>Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.button}>Create News</button>
      </form>
    </div>
  );
};

export default CreateNewsPage;