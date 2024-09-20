import React, { useEffect, useState } from 'react';
import * as PANOLENS from 'panolens';

const ThreeD = () => {
  const [panoramaLoaded, setPanoramaLoaded] = useState(false);
  const [viewer, setViewer] = useState(null); // To hold the viewer instance

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch('https://api.modelflick.com/office/projects/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Assuming you want the images of the first project
        if (data && data.length > 0 && data[0].images.length > 0) {
          const imgPath = data[0].images[0].image;

          // Preload the image
          const img = new Image();
          img.src = imgPath;

          img.onload = () => {
            const panorama = new PANOLENS.ImagePanorama(img.src);
            const imageContainer = document.querySelector('.image-container');

            if (!imageContainer) {
              throw new Error('Image container not found');
            }

            const newViewer = new PANOLENS.Viewer({
              container: imageContainer,
              autoRotate: true,
              autoRotateSpeed: 0.3,
            });

            newViewer.add(panorama);
            setViewer(newViewer); // Save the viewer instance
            setPanoramaLoaded(true); // Mark panorama as loaded
          };
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchProject();

    // Cleanup function
    return () => {
      if (viewer) {
        viewer.dispose(); // Dispose of the viewer on unmount
      }
    };
  }, []); // Runs once on mount

  return (
    <div className="main-container">
      <div className='image-container' style={{ width: '100%', height: '500px', position: 'relative' }}>
        {!panoramaLoaded && <div className="loading-spinner"></div>} {/* Loading spinner */}
      </div>
    </div>
  );
};

export default ThreeD;
