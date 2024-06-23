import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ntPng from "../../Assets/Projects/netflix.png";
import netflixVideo from "../../Assets/Projects/netflix.mp4"; // Correct video path
import clubApp from "../../Assets/Projects/ClubApp.jpg";
// import readewsVideo from "../../Assets/Projects/readews.mp4"; // Correct video path (if you have it)

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
              imgPath={ntPng}
              videoPath={netflixVideo} // Pass video path
              isBlog={false}
              title="netflix"
              description="Built with React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the database. Implemented a machine learning-based recommendation system using Python. Developed an admin panel with CRUD functionalities for movies and user management. Enhanced user engagement with personalized movie recommendations and a seamless user interface."
              ghLink="https://github.com/KuldeepSonara/netflix_with_Ml_clone"
              demoLink="https://github.com/KuldeepSonara/netflix_with_Ml_clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clubApp}
              // videoPath={readewsVideo} // Pass video path (if you have it)
              isBlog={false}
              title="Club App"
              description="Created a stylish Flutter app for fashion enthusiasts using Dart and Android Studio. Improved user experience and engagement with a sleek interface for exploring fashion trends and products."
              ghLink="https://github.com/KuldeepSonara/Fashion-Club-"
              demoLink="https://github.com/KuldeepSonara/Fashion-Club-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
