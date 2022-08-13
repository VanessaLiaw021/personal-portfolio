//Import required packages
import React from 'react';
import Footer from './Footer';
import AvatarPicture from '../assets/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faBootstrap, faReact, faNode, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { DiJqueryLogo, DiMongodb, DiNodejsSmall, DiGit } from 'react-icons/di';

//About Component
const About = () => {
  return (
    <>
      <div className="main about">

        {/* About Section */}
        <div className="about-wrapper">
          <div className="about-content">
            <h3>Hi, I'm <span>Vanessa Liaw</span></h3>
            <p>I'm a <span>Web Developer</span> that wants to focus on <span>Front-End Design/Developer</span> role. I am 
            passionate in designing and building a clean website for users to enjoy. Having a elegant website and n
            ice user interface is something I value as a web developer and as a user.</p>
          </div>
          <img src={AvatarPicture} alt=""/>
        </div>

        {/* Education Section */}
        <div className="education">
          <h2>Education</h2>

          <div className="education-wrapper">
            <div className="education-content">
              <h3>Central Piedmont Community College</h3>
              <p>Associate of Arts in Computer Science</p>
              <p className="date">AUG 2017 - May 2019</p>
            </div>
            <div className="education-content">
              <h3>University of North Carolina at Charlotte NC</h3>
              <p>Bachelor of Arts in Computer Science</p>
              <p className="date">AUG 2019 - DEC 2021</p>
            </div>
            <div className="education-content">
              <h3>University of North Carolina at Charlotte NC</h3>
              <p>Web Development Bootcamp</p>
              <p className="date">MAY 2022 - AUG 2022</p>
            </div>
            <div className="education-content">
              <h3>University of North Carolina at Charlotte NC</h3>
              <p>Master of Information Technology</p>
              <p className="date">AUG 2022 - PRESENT</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills">
          <h2>Skills</h2>
          <p className="description">These are the skills I learn throughout my journey, but still improving in the future:</p>

          <div className="icon">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={ faHtml5 } className="skill-icon" />
              <p>HTML5</p>
            </div>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={ faCss3Alt } className="skill-icon" />
              <p>CSS3</p>
            </div>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={ faBootstrap } className="skill-icon" />
              <p>Bootstrap</p>
            </div>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={ faJs } className="skill-icon" />
              <p>JavaScript</p>
            </div>
            <div className="icon-wrapper">
              <DiJqueryLogo className="skill-icon" />
              <p>jQuery</p>
            </div>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={ faReact } className="skill-icon" />
              <p>React</p>
            </div>
          </div>
          
          <div className="icon">
            <div className="icon-wrapper">
              <DiGit className="skill-icon" />
              <p>Git</p>
            </div>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={ faSquareGithub } className="skill-icon" />
              <p>GitHub</p>
            </div>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={ faNode } className="skill-icon" />
              <p>NodeJS</p>
            </div>
            <div className="icon-wrapper">
              <DiNodejsSmall className="skill-icon" />
              <p>ExpressJS</p>
            </div>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={ faDatabase } className="skill-icon" />
              <p>MySQL</p>
            </div>
            <div className="icon-wrapper">
              <DiMongodb className="skill-icon" />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

//Export About Component
export default About;