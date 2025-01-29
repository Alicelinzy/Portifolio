// import React from 'react'
import "../styles/pages/About/about us.css"
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Header from '../Components/header'
import Footer from '../Components/footer'

function AboutMe() {
  return (
    <div>
    <Header/>
    <div className='about-me-container'>
  <div className='about-me-content'>
    <div className='about-me-row1'>
      <div className='about-me-image'>
        <img src='Linzy.jpg' alt='Profile Pic' />
      </div>
    </div>
  </div>
  <div className='about-me-details'>
    <div className='details'> 
    <h1>Ms. BUGINGO Alice Linzy</h1>
    <h2>Bachelor’s of Information Technology || University Of Kigali</h2>
    <p>Web Developer,  Virtual Assistant, Interpreter and Author</p>
    <div className='social-links'>
    <a href="https://linkedin.com/in/bugingo-alice-linzy-51656a245/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={30} />
  </a>
  <a href="https://instagram.com/alice__linzy/?hl=en" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={30} />
  </a>
  <a href="https://github.com/Alicelinzy" target="_blank" rel="noopener noreferrer">
    <FaGithub size={30} />
  </a>
    </div>
    <div className='email'>
      <p>Email: <span>linzyalice89@gmail.com</span></p>
    </div>
    </div>
  </div>
</div>
<Footer/>
</div>
  );
}

export default AboutMe