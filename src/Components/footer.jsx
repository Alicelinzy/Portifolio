
// import React from 'react';
import '../styles/components/footer/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 BUGINGO Alice Linzy. All rights reserved.</p>

     <div className="navigation-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/bugingo-alice-linzy-51656a245/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Alicelinzy" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/alice__linzy/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
