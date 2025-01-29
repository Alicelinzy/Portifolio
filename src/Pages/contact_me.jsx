// import React from "react";
import "../styles/pages/contact/contact us.css";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h1>
              Get In <span>Touch</span>
            </h1>
            <p>
              Fill up the form and I will get back to you within 24 hours! I will be
              happy to share ideas with you, so dont hesitate to Deal With Me!
            </p>
            <p>Or Contact Me Via Phone Or Socials</p>
            <div className="contact-details">
              <p>
                <FaPhone /> (+250) 78 196 32 32
              </p>
              <p>
                <FaEnvelope /> kwizeraemez@gmail.com
              </p>
            </div>
            <div className="social-icons">
              <FaGithub />
              <FaLinkedin />
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="enter your names" />
            <input type="email" placeholder="enter your email" />
            <textarea placeholder="enter your message"></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;

