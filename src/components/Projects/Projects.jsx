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
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" dangerouslySetInnerHTML={{ __html: t("projects.recent") }}></h1>
        <p style={{ color: "white" }}>
          {t("projects.here")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={design}
              isBlog={false}
              title="Bluestage AI"
              description={t("projects.dc1")}
              demoLink="https://bluestage.ai/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ikigai}
              isBlog={false}
              title="Ikigai"
              description={t("projects.dc2")}
              demoLink="https://solucion.ikigai.com.ec/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pred}
              isBlog={false}
              title="Pred Serv"
              description={t("projects.dc3")}
              demoLink="https://predservengenharia.com.br/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Nautika"
              description={t("projects.dc4")}
              demoLink="https://nautika.evisitor.hr/?lang=hr/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uvm}
              isBlog={false}
              title="SICA 2.0 / Blackboard UVM"
              description={t("projects.dc5")}
              ghLink="https://unitecsica.com/"
              demoLink="https://uvmonline.blackboard.com/webapps/login/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobhub}
              style={{ width: "30px" }}
              isBlog={false}
              title="Job Hub"
              description={t("projects.dc6")}
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
