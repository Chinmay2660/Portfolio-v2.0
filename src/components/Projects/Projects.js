import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="TinDog"
              description="TinDog is a simple web application built with HTML, CSS, and Bootstrap that allows users to browse and connect with other dog owners in their area."
              ghLink="https://github.com/Chinmay2660/Tindog"
              demoLink="https://chinmay2660.github.io/Tindog/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ToDoList"
              description="ToDoList is a simple and intuitive To-Do List application built with HTML, CSS, and JavaScript. The application allows users to manage their daily tasks by adding, editing, deleting, and marking them as completed. Additionally, users can filter tasks by completion status to easily visualize what tasks need to be completed."
              ghLink="https://github.com/Chinmay2660/ToDoList"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blog"
              description="My Blog is a simple and responsive blog website created using Node.js, Express, and MongoDB. The application allows users to read blog posts and create an account to write and publish their own blog posts. The website features a modern, minimalist design that focuses on readability and usability."
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="DiceeGame"
              description="About
              DiceeGame is a web-based game where users can roll two dice and see who gets the higher score. The game is built with HTML, CSS, and JavaScript and includes animations for the dice rolls."
              ghLink="https://github.com/Chinmay2660/DiceeGame"
              demoLink="https://chinmay2660.github.io/DiceeGame/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="DrumKit"
              description="DrumKit is a web application that allows users to play drum sounds by clicking on images of drums or using the corresponding keyboard keys. The application is built with HTML, CSS, and JavaScript and includes seven different drum sounds."
              ghLink="https://github.com/Chinmay2660/DrumKit"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="SimonGame"
              description="Simon Game is a classic memory game built with HTML, CSS, and JavaScript. The game has four colored buttons that light up and play a sound in a specific pattern, and the player must repeat the pattern by clicking the buttons in the correct order. The game starts with a simple pattern and increases in complexity as the player progresses."
              ghLink="https://github.com/Chinmay2660/SimonGame"
              demoLink="https://chinmay2660.github.io/SimonGame/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="DSA By Abdul Bari"
              description="This repository contains implementations of popular data structures and algorithms in C++ based on the teachings of Abdul Bari, an expert in the field of computer science and engineering. The implementations are meant to serve as a reference for those looking to improve their understanding of data structures and algorithms."
              ghLink="https://github.com/Chinmay2660/DSA-By-Abdul-Bari"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
