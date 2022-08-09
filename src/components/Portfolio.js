//Import required packages
import React from 'react';
import ProjectList from '../utils/projectData';
import ProjectCard from './ProjectCard';
import Footer from './Footer';

//Portfolio Component
const Portfolio = () => {
  return (
    <>
      <div className="main portfolio">
        {ProjectList.map(project => <ProjectCard key={project.id} {...project} />)}
      </div>
      <Footer />
    </>
  )
}

//Export portfolio component
export default Portfolio;