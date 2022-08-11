//Import required packages
import React from 'react';
import ProjectList from '../utils/projectData';
import ProjectCard from './ProjectCard';
import Footer from './Footer';

//Portfolio Component
const Portfolio = () => {
  return (
    <>
      <div className="main">
        <h2 className="heading">My Projects</h2>

        <div className="portfolio">
          {ProjectList.map(project => <ProjectCard key={project.id} {...project} />)}
        </div>
      </div>
      <Footer />
    </>
  )
}

//Export portfolio component
export default Portfolio;