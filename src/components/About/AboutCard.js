import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p
            style={{ textAlign: "justify" }}
            dangerouslySetInnerHTML={{ __html: t("about.text") }}
          ></p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("about.1")} 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about.2")} 🎶
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about.3")} 📖
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>{t("about.final")}</p>
          <footer className="blockquote-footer">Jere.dev.mkt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
