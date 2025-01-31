import React, { useState } from "react";
import "../styles/pages/contact/contact us.css";
import Header from "../Components/header";
import Footer from "../Components/footer";
// import Buttons from "../Components/button";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(`Updated ${e.target.name}:`, e.target.value); // Log input changes
  };

  // Handle form submission
  const handleSendMessage = () => {
    const { name, email, message } = formData;

    console.log("Form Data Before Submission:", formData); 

    if (!name || !email || !message) {
      setError("All fields are required!");
      console.log("Error:", "All fields are required!");
      return;
    }

    // Simulate sending the message
    console.log("✅ Message Sent Successfully!");
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    alert(`Message sent successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
    setError("");

    console.log("Form Cleared:", formData);
  };

  return (
    <div>
      <Header />
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h1>
              Get In <span>Touch</span> with <span>Me</span>
            </h1>
            <p>
              Fill up the form and I will get back to you within 24 hours! I will be
              happy to share ideas with you, so dont hesitate to contact me directly for help and collaboration.
            </p>
            <p>Or Contact Me Via Phone Or Email</p>
            <div className="contact-details">
              <p>
                <FaPhone /> (+250) 78 396 37 96
              </p>
              <p>
                <FaEnvelope /> linzyalice89@gmail.com
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
            {error && <p className="error-message">{error}</p>}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              className="area"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className="button-3" onClick={handleSendMessage}>
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
