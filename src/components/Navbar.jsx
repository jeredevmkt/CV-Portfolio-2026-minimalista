import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.jpg";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

export default function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { i18n, t } = useTranslation();

  // 1. Guardamos los SVG Inline directamente dentro de la lista para que carguen de forma local obligatoria
  const languages = [
    {
      code: "en",
      label: "EN",
      flag: (
        <svg
          xmlns="http://w3.org"
          viewBox="0 0 741 390"
          className="w-100 h-100 d-block"
          style={{ objectFit: "cover" }}
        >
          <path
            fill="#b31942"
            d="M0 0h741v30H0zm0 60h741v30H0zm0 60h741v30H0zm0 60h741v30H0zm0 60h741v30H0zm0 60h741v30H0zm0 60h741v30H0z"
          />
          <path
            fill="#fff"
            d="M0 30h741v30H0zm0 60h741v30H0zm0 60h741v30H0zm0 60h741v30H0zm0 60h741v30H0zm0 60h741v30H0z"
          />
          <path fill="#0a3161" d="M0 0h296.4v210H0z" />
        </svg>
      ),
    },
    {
      code: "es",
      label: "ES",
      flag: (
        <svg
          xmlns="http://w3.org"
          viewBox="0 0 16 10"
          className="w-100 h-100 d-block"
          style={{ objectFit: "cover" }}
        >
          <path fill="#74acdf" d="M0 0h16v10H0z" />
          <path fill="#fff" d="M0 3.333h16v3.334H0z" />
          <path fill="#74acdf" d="M0 6.667h16V10H0z" />
          <circle cx="8" cy="5" r="1" fill="#f6b426" />
        </svg>
      ),
    },
    {
      code: "pt",
      label: "PT",
      flag: (
        <svg
          xmlns="http://w3.org"
          viewBox="0 0 600 400"
          className="w-100 h-100 d-block"
          style={{ objectFit: "cover" }}
        >
          <path fill="#006600" d="M0 0h240v400H0z" />
          <path fill="#ff0000" d="M240 0h360v400H240z" />
          <circle cx="240" cy="200" r="80" fill="#ffff00" />
        </svg>
      ),
    },
    {
      code: "de",
      label: "DE",
      flag: (
        <svg
          xmlns="http://w3.org"
          viewBox="0 0 5 3"
          className="w-100 h-100 d-block"
          style={{ objectFit: "cover" }}
        >
          <path fill="#000" d="M0 0h5v1H0z" />
          <path fill="#dd0000" d="M0 1h5v1H0z" />
          <path fill="#ffce00" d="M0 2h5v1H0z" />
        </svg>
      ),
    },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} alt="brand" width="36px" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto d-flex align-items-center"
            defaultActiveKey="#home"
          >
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t("navbar.projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.resume")}
              </Nav.Link>
            </Nav.Item>

            {/* SECCIÓN DEL SELECTOR CON MENÚ DESPLEGABLE OSCURO Y MINIMALISTA */}
            <NavDropdown
              title={
                <div className="d-inline-flex align-items-center gap-1.5 px-1 py-1 text-[10px] text-white/80 tracking-wide font-medium transition hover:text-white">
                  <div
                    className="rounded-sm overflow-hidden border border-white border-opacity-10 flex-shrink-0"
                    style={{ width: "15px", height: "10px" }}
                  >
                    {currentLanguage.flag}
                  </div>
                  <span>{currentLanguage.code.toUpperCase()}</span>
                </div>
              }
              id="language-nav-dropdown"
              className="custom-language-dropdown mx-1"
              align="end"
              // SOLUCIÓN DEFINITIVA: Estiliza la cajita flotante para quitar el blanco de Bootstrap
              style={{
                "--bs-dropdown-bg": "#0f0f1e", // Fuerza el fondo oscuro en Bootstrap 5
                "--bs-dropdown-border-color": "rgba(255, 255, 255, 0.1)",
              }}
            >
              {languages.map((lang) => (
                <NavDropdown.Item
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`d-flex align-items-center gap-2 py-1.5 px-2.5 text-[10px] font-medium transition-colors duration-200 ${
                    i18n.language === lang.code
                      ? "bg-purple-600/20 text-[#FF4B6E] fw-bold"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                  style={{
                    minWidth: "85px",
                    background:
                      i18n.language === lang.code
                        ? "rgba(139, 92, 246, 0.2)"
                        : "transparent",
                  }}
                >
                  <div
                    className="rounded-sm overflow-hidden border border-white border-opacity-10 flex-shrink-0"
                    style={{ width: "15px", height: "10px" }}
                  >
                    {lang.flag}
                  </div>
                  <span>{lang.code.toUpperCase()}</span>
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
