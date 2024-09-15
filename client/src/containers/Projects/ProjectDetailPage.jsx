import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as PANOLENS from 'panolens';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const viewerRef = useRef(null); // Reference for the Panolens viewer container

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const apiUrl = import.meta.env.VITE_APP_API_URL;
        const response = await fetch(`${apiUrl}/office/projects/${id}/`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        // Log the number of images
        if (data.images) {
          console.log(`Number of images: ${data.images.length}`);
        } else {
          console.log('No images available');
        }

        setProject(data);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  useEffect(() => {
    if (selectedImage && viewerRef.current) {
      // Initialize the Panolens viewer
      const panorama = new PANOLENS.ImagePanorama(selectedImage.image);
      const viewer = new PANOLENS.Viewer({
        container: viewerRef.current,
        autoRotate: true,
        autoRotateSpeed: 0.3
      });

      viewer.add(panorama);

      // Cleanup on component unmount
      return () => {
        viewer.dispose();
        viewerRef.current.innerHTML = ''; // Clear the container
      };
    }
  }, [selectedImage]);

  if (loading) return <p>Loading project details...</p>;
  if (error) return <p>Error loading project details: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      {project ? (
        <div>
          <h1 className="text-2xl font-bold">{project.client_name || "Unknown Client"}</h1>
          <img src={project.image || "default-image-url"} alt={`${project.client_name || "project"}'s project`} className="w-full h-auto mt-4" />
          <p><strong>Location:</strong> {project.location || "N/A"}</p>
          <p><strong>Project Type:</strong> {project.project_type || "N/A"}</p>
          <p><strong>Built-up Area:</strong> {project.builtup_area || "N/A"} sq ft</p>
          <p><strong>Project Stage:</strong> {project.project_stage || "N/A"}</p>
          <p><strong>Start Date:</strong> {project.start_date ? new Date(project.start_date).toLocaleDateString() : "N/A"}</p>
          <p><strong>End Date:</strong> {project.end_date ? new Date(project.end_date).toLocaleDateString() : "N/A"}</p>
          <p><strong>Description:</strong> {project.description || "N/A"}</p>

          {/* Conditionally render the Panolens viewer */}
          {!selectedImage ? (
            <div className="tiles-container">
              {project.images && project.images.map((image) => (
                <div
                  key={image.id}
                  className="tile"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image.image} alt={`Thumbnail of ${image.id}`} />
                </div>
              ))}
            </div>
          ) : (
            <div ref={viewerRef} className="viewer-container" style={{ width: '100%', height: '100vh' }}>
              <button onClick={() => setSelectedImage(null)} className="close-button">Close</button>
            </div>
          )}
        </div>
      ) : (
        <p>No project details available</p>
      )}
    </div>
  );
};

export default ProjectDetailPage;
