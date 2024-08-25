import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate full-stack developer with a focus on the MERN
              stack, eager to build innovative web applications and solutions.
              Over the years, I've honed my skills in various technologies and
              frameworks.
              <br />I am fluent in both frontend and backend technologies like
              <i>
                <b className="purple">
                  {" "}
                  MongoDB, Express.js, React.js, and Node.js (MERN stack)
                </b>
              </i>
              , allowing me to build robust and scalable web applications.
              <br />
              My fields of interest include creating dynamic &nbsp;
              <i>
                <b className="purple">web applications and products,</b>{" "}
                particularly those that leverage modern JavaScript frameworks
                and libraries.
              </i>
              <br />
              Additionally, I have experience with{" "}
              <b className="purple">PostgreSQL</b>,
              <i>
                <b className="purple"> Firebase, </b>
              </i>
              and{" "}
              <i>
                <b className="purple">Cloudinary</b>
              </i>{" "}
              to handle data, authentication, and media management in my
              projects.
              <br />
              Whenever possible, I also apply my passion for developing products
              using
              <b className="purple"> React.js</b>,
              <i>
                <b className="purple">
                  {" "}
                  Node.js, and modern cloud technologies.
                </b>
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={me}
                alt="avatar"
                style={{
                  borderRadius: "50%",
                  width: "250px", // Adjust size as needed
                  height: "250px", // Adjust size as needed
                  objectFit: "cover",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Muhammedsiyadt"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://x.com/shuhaiibc"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammedsiyadt/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/siyad___._10/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
