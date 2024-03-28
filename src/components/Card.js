import React from 'react';
import { useState } from 'react';


const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  padding: '20px',
  margin: '10px 0',
  width: '100%',
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center', 
  minHeight: '100px',
};

const imageStyle = {
  width: '150px', 
  height: '150px', 
  marginBottom: '20px', 
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px', 
};

const contentStyle = {
  fontSize: '14px',
  color: '#333',
  textAlign: 'left', 
  maxWidth: '80%', 
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#007bff',
  color: 'white',
  cursor: 'pointer',
};


const Card = ({ title, content,image}) => {

  const [showFullContent, setShowFullContent] = useState(false);
  const firstSentence = content.includes('.') ? content.split('.')[0] + '.' : content;

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const imagePath = require(`../images/${image}`);


  return (
    <div style={cardStyle}>
      <img src={imagePath} alt={title} style={imageStyle} />
      <div style={titleStyle}>{title}</div>
        <div style={contentStyle}>
        {showFullContent ? content : `${firstSentence}...`}
        </div>
        <button onClick={toggleContent} style={buttonStyle}>
          {showFullContent ? 'Less' : 'More'}
        </button>
    </div>
  );

};

export default Card;