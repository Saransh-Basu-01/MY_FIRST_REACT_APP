import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=5')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.log('Error fetching images:', error));
  }, []);

  return (
    <div>
      <h1>Random Images</h1>
      {images.length === 0 ? (
        <p>Loading images...</p>
      ) : (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {images.map(image => (
            <div key={image.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
              <img
                src={`https://picsum.photos/id/${image.id}/300/200`}
                alt={image.author}
                style={{ width: '300px', height: '200px', objectFit: 'cover' }}
              />
              <p style={{ textAlign: 'center' }}>{image.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
