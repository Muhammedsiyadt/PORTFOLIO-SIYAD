import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). My journey began with learning core web development principles, and I quickly moved into creating robust web applications using the MERN stack. One of my major projects is "Fonekart," an e-commerce platform built from scratch, demonstrating my ability to develop scalable and efficient applications.
            <br />
            <br />
            In addition to the MERN stack, I have also learned PostgreSQL for relational database management, Firebase for backend services and real-time databases, and Cloudinary for optimized media management. These skills have enabled me to build comprehensive web applications that integrate various technologies to meet complex requirements.
            <br />
            <br />
            I have developed several clones and CRUD applications using the MERN stack, enhancing my expertise in full-stack development and modern web technologies.
          </p>
          <br />
          Apart from coding, here are some other activities that I love to do!
          <ul><br />
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammed Siyad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
