//Import required packages
import React from 'react';
import ProfilePicture from '../assets/profile.jpg';

//Home Component 
const Home = () => {
  return (
    <div className='main home'>
      <img src={ProfilePicture} alt=""/>
      <h2>Hi, I'm <span>Vanessa Liaw</span></h2>
      <p>I'm a <span>Web Developer</span> that focuses on front-end design</p>
      <button>Learn About Me</button>
      <button>Exlpore My Portfolio</button>
    </div>
  )
}

//Export Home Component 
export default Home;