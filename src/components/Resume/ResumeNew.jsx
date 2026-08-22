import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Escobedo Jeremias Full Stack Web Developer CV.pdf";
import pdfES from "../../Assets/../Assets/Escobedo Jeremias Desarrollador Web Full Stack CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { useTranslation } from "react-i18next";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const { i18n, t } = useTranslation();

  /* 2. LÓGICA DE DETECCIÓN: Si el idioma incluye 'es', usa pdfES. Para cualquier otro (en, pt, de), usa el pdf en inglés */
  const archivoPdfActivo = i18n.language.startsWith('es') ? pdfES : pdf;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            size="lg"
          >
            <AiOutlineDownload />
            &nbsp; {t("resume.download")}
          </Button>
        </Row>

        <Row className="resume">
          <Document file={archivoPdfActivo} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
