// import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import "../styles/pages/Home/home.css";
import Buttons from '../Components/button';

import "../styles/pages/About/about us.css"
function Home() {

  const HandleExploreMoreClick =() => {
    const AboutSection = document.getElementById('About-Me')
    if (AboutSection) (
      AboutSection.scrollIntoView({ behavior:'smooth' })
    )
  };
  return (
    <div>
    <Header/> 
    <section id="Home">
      <div className="home-content">
        <div className="home-text">
        <h1>Hi, I am BUGINGO Alice Linzy</h1>
       <div className='button'>
       <Buttons className="button-1" onClick ={HandleExploreMoreClick}>Explore More</Buttons>
       </div>
        </div>
      </div>
    </section>
    <section id='About-Me'>
      <div className='about-container'>
        <div className='about-content'> 
          <div className='about-row1'>
            <h3>Passionate Full-Stack Developer | Innovating for Impact</h3>
            <p>
            I specialize in building user-friendly and innovative solutions, focusing on React for frontend and Django for backend. With a strong interest in cybersecurity and AI, I explore ways to create impactful software that solves real-world problems. Beyond coding, I’m committed to empowering others and inspiring youth to leverage technology for a better future.
           </p>
           <a href="/BUGINGO Alice's CV.pdf" download>
           <button className="button-2">Download My CV</button>
           </a>
          </div>

      <div className='about-row2'>
      <div className='image-container'>  
      <img 
        src='Alice.jpeg' 
        alt='About Me' 
        className='about-image'
      />
      </div>
    </div>
        </div>
      </div>
    </section>
    <Footer/>  
    </div>
  )
}

export default Home