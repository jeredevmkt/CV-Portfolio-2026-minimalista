import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import design from "../../Assets/Projects/design.png";
import ikigai from "../../Assets/Projects/ikigai funnel.png";
import jobhub from "../../Assets/Projects/jobhub.png";
import pred from "../../Assets/Projects/pred serv.png";
import uvm from "../../Assets/Projects/uvm.jpg";

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
              imgPath={design}
              isBlog={false}
              title="Bluestage AI"
              description="Sass & CRM solutions, Designs, Developent and Management on GoHighLevel, Chatbots and Automations"
              demoLink="https://bluestage.ai/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ikigai}
              isBlog={false}
              title="Ikigai"
              description="Funnel website for travel agency"
              demoLink="https://solucion.ikigai.com.ec/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pred}
              isBlog={false}
              title="Pred Serv"
              description="Portfolio Business Website for share services, online presence and obtain new clients"
              demoLink="https://predservengenharia.com.br/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Nautika"
              description="Wordpress + WooCommerce website for a Croatian company that sells and rents boats."
              demoLink="https://nautika.evisitor.hr/?lang=hr/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uvm}
              isBlog={false}
              title="SICA 2.0 / Blackboard UVM"
              description="Modernization of 2 Mexican university websites that are used for their management and organization.."
              ghLink="https://unitecsica.com/"
              demoLink="https://uvmonline.blackboard.com/webapps/login/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobhub}
              style={{ width: "30px" }}
              isBlog={false}
              title="Job Hub 1st Team Project"
              description="This is the final Project of Soy Henry's graduation that I and five of my classmates managed to do as a team."
              ghLink="https://github.com/OwenConW/JobHubApp"
              demoLink="https://jobhub.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
