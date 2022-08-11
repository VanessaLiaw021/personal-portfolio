//Import required packages
import React from 'react';
import ProfilePicture from '../assets/profile.jpg';
import Footer from './Footer';
import { Link } from 'react-router-dom';

//Home Component 
const Home = () => {
  return (
    <>
      <div className='main home'>
        <img src={ProfilePicture} alt=""/>
        <h2>Hi, I'm <span>Vanessa Liaw</span></h2>
        <p>I'm a <span>Web Developer</span> that focuses on front-end design</p>
        <button><Link to="/about" className="view">Learn About Me</Link></button>
        <button><Link to="/portfolio" className="view">Explore My Portfolio</Link></button>
      </div>
      <Footer />
    </>
  );
};

//Export Home Component 
export default Home;