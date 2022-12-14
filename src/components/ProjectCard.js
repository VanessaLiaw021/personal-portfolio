//Import required packages
import React from 'react';

//Project Card Component
const ProjectCard = (props) => {
  return (
    <div className="card" key={props.id}>
      <img src={props.image} alt={props.imageAlt} />
      <p className="title">{props.title}</p>
      <p className="description">{props.description}</p>
      <ul>
        {props.tools.map(tool => <li className="tools-list">{tool}</li>)}
      </ul>
      <div className="card-button">
        <a href={props.liveSite} target="_blank" rel="noreferrer">View Site</a>
        <a href={props.gitHub} target="_blank" rel="noreferrer">View Repo</a>
      </div>
    </div>
  );
};

//Export project card component
export default ProjectCard;