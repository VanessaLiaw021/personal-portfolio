//Import required packages
import React from 'react';

//Project Card Component
const ProjectCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.imageAlt} />
      <p>{props.title}</p>
      <div className="card-button">
        <a href={props.liveSite}>View Site</a>
        <a href={props.gitHub}>View Repo</a>
      </div>
    </div>
  );
};

//Export project card component
export default ProjectCard;