import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I’m a Hi world, I’m Jere — a
              <i>
                <b className="purple">
                  {" "}
                  Creative Developer and Content Specialist.
                </b>
              </i>
              <br />I help businesses and creators build high-quality digital
              experiences through a combination of
              <i>
                <b className="purple">
                  {" "}
                  web development, video editing, and AI-powered content.{" "}
                </b>
              </i>
              <br />
              <br />
              💻 <b className="purple">Web Development</b>
              <br />
              I build modern, fast, and scalable websites and applications using
              technologies like React, Next.js, and Node.js. Clean code,
              responsive design, and performance are always a priority.
              <br />
              <br />
              🎬 <b className="purple">Video Editing & Content Creation</b>
              <br />
              I create engaging video content with a strong focus on
              storytelling, clean edits, colour grading, and professional
              presentation — ideal for courses, social media, and branded
              content.
              <br />
              <br />
              🎨 <b className="purple">Design & AI Content</b>
              <br />
              From graphic design to AI-generated visuals, I develop modern,
              consistent assets that align with your brand and stand out in
              today’s digital space.
              <br />
              <br />
              📈 <b className="purple">Marketing & eCommerce</b>
              <br />I also bring experience in social media marketing and
              eCommerce, helping projects not only look good, but perform.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
