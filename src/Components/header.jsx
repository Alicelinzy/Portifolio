// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../styles/components/header/header.css'
import { Link } from "react-router-dom";



function Header() {
  return (
    <div className="main-container">
    <div className="container">
      <img src="Logo (2).png" alt="logo" />
      <nav className="nav">
        <ul className="lists">
          <li>
            <Link to="/" className="active">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact_me">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div> 
  );
}

export default Header