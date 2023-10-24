import React, { useState } from 'react';
import projectsData from './Projects-Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

function Projects() {
    const [expandedProject, setExpandedProject] = useState(null);
  
    const handleExpand = (index) => {
      if (expandedProject === index) {
        setExpandedProject(null); // Collapse if already expanded
      } else {
        setExpandedProject(index); // Expand if not expanded
      }
    };
  
    const renderProjects = () => {
      return projectsData.map((project, index) => (
        <div key={index} className={`project ${expandedProject === index ? 'expanded' : ''}`}>
          <h3>{project.title} <button
            className="arrow-button"
            onClick={() => handleExpand(index)}
          >
            <FontAwesomeIcon icon={expandedProject === index ? faAngleUp : faAngleDown} />
          </button></h3>
          {expandedProject === index && (
            <p>{project.description}</p>
          )}
          
        </div>
      ));
    };
  
    
  return (
    <div>
      <h1>My Projects</h1>
      {renderProjects()}
    </div>
  );
}

export default Projects;