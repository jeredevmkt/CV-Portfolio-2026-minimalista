import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello dear! I’m <span className="purple">Jere</span>{" "}
            from <span className="purple">Buenos Aires, Argentina</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Web App Developer, AI Automation, Wordpress, GHL</span> as{" "}
            <span className="purple">Freelancer</span>.
            <br />I hold an Integrated {" "}
            <span className="purple">Full Stack Web Development (MERN, PERN, Python)</span> from{" "}
            <span className="purple">Henry Bootcamp and Highschool</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing, Playing Guitar and Piano 🎶
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Courses and Reading Bible 📖
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jere.dev.mkt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
