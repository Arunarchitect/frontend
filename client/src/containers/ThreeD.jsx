import React, { useEffect } from 'react';
import * as THREE from 'three'; // Import THREE
import * as PANOLENS from 'panolens';

const ThreeD = () => {
  useEffect(() => {
    // Error handling and logging
    try {
      const panorama = new PANOLENS.ImagePanorama('/room.jpg'); // Use a relative path to public directory
      const imageContainer = document.querySelector('.image-container');

      if (!imageContainer) {
        throw new Error('Image container not found');
      }

      const viewer = new PANOLENS.Viewer({
        container: imageContainer,
        autoRotate: true,
        autoRotateSpeed: 0.3,
      });

      if (!viewer) {
        throw new Error('Failed to create PANOLENS viewer');
      }

      viewer.add(panorama);
      
    } catch (error) {
      console.error('Error initializing PANOLENS:', error);
    }
  }, []);

  return (
    <div className="main-container">
      <div className='image-container' style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default ThreeD;
