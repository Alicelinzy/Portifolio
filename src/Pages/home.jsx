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
            <h3>About Me!</h3>
            <p>
            I am a passionate software developer with a strong <br></br>
            interest in building innovative and user-friendly solutions. <br></br>
            My expertise spans full-stack development, with a focus on  <br></br>
            front-end technologies like React and backend frameworks <br></br> 
            like Django. cybersecurity and artificial intelligence to create   <br></br>
            impactful I am constantly exploring new ways to combine my <br></br>
            interests in software  that solves real-world problems.
           </p>
           <p>
           Beyond coding, I am driven by a desire to empower others and  <br></br>
           inspire youth to realize the potential of technology in shaping <br></br>
           the future. My goal is to grow as a full-stack developer and  <br></br>
           collaborate on projects that make a meaningful difference.<br></br>
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