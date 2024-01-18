import React from 'react';
import './App.css';

const catPictures = [
  'https://placekitten.com/200/200',
  'https://placekitten.com/201/200',
  'https://placekitten.com/202/200',
  'https://placekitten.com/203/200',
  'https://placekitten.com/204/200',
];

const PhotoGallery = () => {
  return (
    <div>
      <h1>Profile Pictures</h1>
      <div className="gallery">
        {catPictures.map((url, index) => (
          <img key={index} src={url} alt={`Cat ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};