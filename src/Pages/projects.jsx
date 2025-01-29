// import React from "react";
import ProjectCard from '../Components/project_card'
import "../styles/components/Project_card/project_card.css"
import "../styles/pages/projects/projects.css"
import Header from '../Components/header'
import Footer from '../Components/footer'


const Projects = () => {

  const projectData = [
    {
      title: "Gas Stock Management System",
      description:'A comprehensive system designed to manage and monitor gas stock levels, and tracking of inventory, sales, and restocking activities. It provides real-time insights and automates key operations to enhance efficiency in the gas distribution industry.',
      image: "Gas_project.PNG", 
      link: "https://example.com/gas-stock", 
    },
    {
      title: "Todo List Application",
      description:  'A sleek and user-friendly task management app built to help users organize their daily activities. Features include task creation, editing, marking as complete, and real-time synchronization.',
      image: "Todo.PNG", 
      link: "https://example.com/todo-app", 
    },
    {
      title: "Calculator",
      description:"A simple yet powerful calculator application that supports basic arithmetic operations and a clean, responsive design for both desktop and mobile users.",
      image: "calculator.PNG", 
      link: "https://example.com/library-system", 
    },
  ];

  return (
    <div>
    <Header/>
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Projects;
