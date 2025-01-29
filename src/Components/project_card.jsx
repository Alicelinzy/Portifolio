// import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for props validation
import '../styles/components/Project_card/project_card.css';

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
          View Project
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
