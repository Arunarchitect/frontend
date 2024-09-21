import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import * as PANOLENS from "panolens";
import "./ProjectDetailPage.css";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [panoramaLoading, setPanoramaLoading] = useState(false);
  const viewerRef = useRef(null);
  const viewerInstanceRef = useRef(null);
  const [activeCircles, setActiveCircles] = useState([
    "not-started",
    "not-started",
    "not-started",
    "not-started",
    "not-started",
  ]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const apiUrl = import.meta.env.VITE_APP_API_URL;
        const response = await fetch(`${apiUrl}/office/projects/${id}/`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        setProject(data);
        if (data.images && data.images.length > 0) {
          setSelectedImage(data.images[0]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  useEffect(() => {
    if (project) {
      const statuses = [
        project.lod100_status,
        project.lod200_status,
        project.lod300_status,
        project.lod400_status,
        project.lod500_status,
      ];

      const newActiveCircles = statuses.map((status) => {
        if (status === "completed") return "completed"; // Green
        if (status === "in_progress") return "in-progress"; // Yellow
        return "not-started"; // Transparent
      });

      setActiveCircles(newActiveCircles);
      triggerAnimation(newActiveCircles);
    }
  }, [project]);

  const triggerAnimation = () => {
    const animationDelays = [0, 500, 1000, 1500, 2000]; // Delays for each circle
    
    // Start the line animation at the same time as the first circle
    setTimeout(() => {
      const line = document.querySelector('.progress-line');
      if (line) {
        line.classList.add('line-animate'); // Trigger line animation
      }
    }, 0); // Start immediately
  
    animationDelays.forEach((delay, index) => {
      setTimeout(() => {
        setActiveCircles((prevCircles) => {
          const newCircles = [...prevCircles];
          if (index < newCircles.length) {
            newCircles[index] += ' animating'; // Add 'animating' class for circle animation
          }
          return newCircles;
        });
      }, delay);
    });
  };
  

  const handleImageClick = (image) => {
    setPanoramaLoading(true);
    setSelectedImage(image);
  };

  useEffect(() => {
    if (selectedImage && viewerRef.current) {
      if (viewerInstanceRef.current) {
        viewerInstanceRef.current.dispose();
      }

      const panorama = new PANOLENS.ImagePanorama(selectedImage.image);
      const viewer = new PANOLENS.Viewer({
        container: viewerRef.current,
        autoRotate: true,
        autoRotateSpeed: 0.3,
      });

      viewer.add(panorama);
      viewerInstanceRef.current = viewer;

      panorama.addEventListener("enter", () => {
        setPanoramaLoading(false);
      });

      panorama.addEventListener("error", () => {
        setPanoramaLoading(false);
      });

      return () => {
        viewer.dispose();
        if (viewerRef.current) {
          viewerRef.current.innerHTML = "";
        }
      };
    }
  }, [selectedImage]);

  if (loading) return <div className="loading-spinner"></div>;
  if (error) return <p>Error loading project details: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      {project ? (
        <div className="flex-container">
          <div className="project-image">
            <img
              src={project.image || "default-image-url"}
              alt={`${project.client_name || "project"}'s project`}
              className="w-full h-auto"
            />
          </div>
          <div className="project-details">
            <h1 className="text-2xl font-bold">
              {project.client_name || "Unknown Client"}
            </h1>
            <p><strong>Location:</strong> {project.location || "N/A"}</p>
            <p><strong>Project Type:</strong> {project.project_type || "N/A"}</p>
            <p><strong>Built-up Area:</strong> {project.builtup_area || "N/A"} sq ft</p>
            <p><strong>Project Stage:</strong></p>
            <div className="progress-container">
              <div className="progress-labels">
                {activeCircles.map((status, index) => (
                  <div
                    key={index}
                    className={`circle ${status} ${activeCircles[index].includes("animating") ? "animating" : ""}`}
                  >
                    <span className="circle-text">{index + 1}</span>
                  </div>
                ))}
              </div>
              <div className="progress-line"></div> {/* New line for animation */}
            </div>
            <p><strong>Start Date:</strong> {project.start_date ? new Date(project.start_date).toLocaleDateString() : "N/A"}</p>
            <p><strong>Description:</strong> {project.description || "N/A"}</p>
          </div>
        </div>
      ) : (
        <p>No project details available</p>
      )}
      <div ref={viewerRef} className="viewer-container">
        {panoramaLoading && <div className="loading-spinner"></div>}
      </div>
      {project?.images?.length > 0 && (
        <div className="tiles-container">
          {project.images.map((image) => (
            <div key={image.id} className="tile" onClick={() => handleImageClick(image)}>
              <p>{image.image_name}</p>
              <img src={image.image} alt={`Thumbnail of ${image.id}`} className="thumbnail" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;
