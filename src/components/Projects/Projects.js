import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fonekart from "../../Assets/Projects/fone.jpeg";
import netflix_react from "../../Assets/Projects/netflix-react.png";
import olx from "../../Assets/Projects/olx.png";
import todo from "../../Assets/Projects/todo.png";
import portfolio from "../../Assets/Projects/port.png";
import crud_html from "../../Assets/Projects/crud-html.png";
import foab from "../../Assets/Projects/foab.png"; 
import net from "../../Assets/Projects/netflix-html.png";
import home from "../../Assets/Projects/home.png";
import crud from "../../Assets/Projects/crud.png";  

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fonekart}
              isBlog={false}
              title="FONEKART - [ E-COMMERCE ]"
              description="“Fonekart” is a robust e-commerce platform developed with a focus on delivering a complete shopping experience. It incorporates JWT token authentication and OTP verification for enhanced security. The platform features product filtering, easy payment options, and streamlined admin controls, built with HTML5, CSS, Bootstrap, JavaScript, Node.js, Express.js, MongoDB, AWS, and GitHub. "
              ghLink="https://github.com/Muhammedsiyadt/Fonekart"
              demoLink="https://www.fonekartservice.live/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="CRUD APPLICATION IN REACT"
              description="This project is a comprehensive CRUD application built with ReactJS, showcasing advanced state management with Redux and secure authentication using JWT. It integrates Cloudinary for efficient image storage and features elegant styles for a polished user interface. The application demonstrates proficiency in modern web development practices and provides a seamless user experience."
              ghLink="https://github.com/Muhammedsiyadt/CRUD-React  "
              demoLink="https://crud-App.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix_react} 
              isBlog={false}
              title="NETFLIX - CLONE IN REACT"
              description=" created a fully responsive Netflix clone using React, which allowed me to significantly deepen my expertise in React and explore Firebase for secure user data storage and authentication. This project offered valuable insights into frontend development and helped me refine my full-stack skills, including state management and integrating third-party services. Building this clone provided a comprehensive understanding of developing modern, dynamic web applications."
              ghLink="https://github.com/Muhammedsiyadt/Netflix-Clone-React"
              demoLink="https://netflix-clone-react-qfrdp5rpt-muhammedsiyadts-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olx}
              isBlog={false}
              title="OLX - CLONE IN REACT" 
              description="This app allows users to seamlessly buy and sell items, just like the real OLX platform. I've implemented login and signup functionality with full validation and detailed error messages for a smooth user experience. Additionally, users can upload images directly to Firebase, making the app both functional and secure. Working on this project has been an incredible learning experience, especially with integrating Firebase for authentication and storage!"
              ghLink="https://github.com/Muhammedsiyadt/olx-clone-React"
              demoLink="https://olx-clone-react-git-main-muhammedsiyadts-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TO - DO APP IN REACT"
              description="The To-Do App is a React.js application designed to streamline task management. It offers users the ability to add new tasks, edit existing ones, and delete tasks as needed. Users can also mark tasks as completed, which moves them to a separate section for better organization. The app features an intuitive interface that makes it easy to navigate and manage tasks, helping users stay organized and on top of their daily responsibilities."
              ghLink="https://github.com/Muhammedsiyadt/to-do-in_react"
              demoLink="https://to-do-in-react-jjyz.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="PORTFOLIO IN REACT"
              description="The React Portfolio is a stylish and responsive showcase of my professional work, developed using React.js and Vite. It features a sleek, modern design with sections dedicated to my projects, skills, and contact details. The portfolio is fully responsive, ensuring an optimal viewing experience across various devices. It highlights my development expertise and provides an intuitive interface for visitors to explore my work and get in touch."
              ghLink="https://github.com/Muhammedsiyadt/PORTFOLIO-ReactJS"
              demoLink="https://portfolio-react-js-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud_html} 
              isBlog={false}
              title="CRUD - APP IN HTML"
              description="This project is a comprehensive CRUD application developed with HTML, CSS, and Bootstrap for a responsive and stylish front-end, and Node.js with Express.js for a robust back-end. Leveraging MongoDB for efficient data management, it provides full create, read, update, and delete functionalities with a sleek, user-friendly interface. The project highlights advanced full-stack development skills and the effective integration of modern web technologies."
              ghLink="https://github.com/Muhammedsiyadt/Web-application"
              demoLink="https://muhammedsiyadt.github.io/Web-application/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={home}
              isBlog={false}
              title="BUILDCON RESPONSIVE WEB"
              description="A responsive website named Buildcon using HTML, CSS, Bootstrap, and media queries. The project features a modern, flexible design that adapts seamlessly to various screen sizes and devices. With Bootstrap for layout and styling and media queries for fine-tuned responsiveness, Buildcon delivers a user-friendly and visually appealing interface, demonstrating proficiency in creating adaptable and accessible web experiences."
              ghLink="https://github.com/Muhammedsiyadt/Buildcone"
              demoLink="https://muhammedsiyadt.github.io/Buildcone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foab}
              isBlog={false}
              title="FOAB STATIC WEB"
              description="FOAB is a static website crafted with HTML and CSS, designed to offer a clean and visually appealing online presence. This project showcases a straightforward yet elegant design, focusing on delivering a smooth and engaging user experience. With its simple, static nature, FOAB demonstrates proficiency in front-end development using core web technologies, providing a polished and responsive interface without the need for complex back-end interactions."
              ghLink="https://github.com/Muhammedsiyadt/foab"
              demoLink="https://muhammedsiyadt.github.io/foab/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={net}
              isBlog={false}
              title="NETFLIX STATIC WEB"
              description="Static Netflix-themed website using HTML and CSS. This project features a visually appealing design that mimics the look and feel of Netflix's user interface. It showcases a clean, responsive layout with elegant styling, providing an engaging and polished experience without any dynamic functionality. This project highlights front-end development skills and an ability to create a visually stunning interface inspired by a popular streaming platform."
              ghLink="https://github.com/Muhammedsiyadt/netflix"
              demoLink="https://muhammedsiyadt.github.io/netflix/"
            />
          </Col>

          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
