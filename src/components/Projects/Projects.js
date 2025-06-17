import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import thoughtSpill from '../../Assets/Projects/thoughtSpill.png';
import comet from '../../Assets/Projects/comet.png';
import findIt from '../../Assets/Projects/findIt.png';
import windi from '../../Assets/Projects/windi.png';
import ribbit from '../../Assets/Projects/ribbit.png';
import inventory from '../../Assets/Projects/inventory.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thoughtSpill}
              isBlog={false}
              title="Comet"
              description="Book blog with a decoupled architecture: a separate backend and two frontends—one public for reading posts and one private for admin management—highlighting flexible, modular development."
              ghLink="https://github.com/Hekimianz/thoughtSpill"
              demoLink="https://thoughtspill.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comet}
              isBlog={false}
              title="Comet"
              description="A lightweight messaging app built with modern web technologies for fast, real-time communication. It features secure user authentication, one-on-one private chats, WebSocket-powered instant messaging, and a responsive, intuitive interface across devices."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://comet-messenger.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={findIt}
              isBlog={false}
              title="FindIt"
              description="Inspired by 'Where’s Waldo,' where players search for hidden characters in themed illustrations. It uses React Router for navigation, an Express API for game logic, and Prisma for database management."
              ghLink="https://github.com/Hekimianz/findIt"
              demoLink="https://findit-hek.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={windi}
              isBlog={false}
              title="WiNDi"
              description="Weather app built using OpenWeather API."
              npm
              ghLink="https://github.com/Hekimianz/windi"
              demoLink="https://hekimianz.github.io/windi/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ribbit}
              isBlog={false}
              title="Ribbit (Currently Building)"
              description="A full-featured Reddit clone with user authentication, built with a Node/Express backend, PostgreSQL, and Prisma for database management."
              ghLink="https://github.com/Hekimianz/ribbit"
              demoLink="https://github.com/Hekimianz/ribbit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="InventoryMaster"
              description="Efficient inventory management using React, Node.js, PostgreSQL."
              img={inventory}
              ghLink="https://github.com/Hekimianz/inventoryMaster"
              demoLink="https://inventorymaster.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
