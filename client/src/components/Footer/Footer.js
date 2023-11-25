import React from "react";
import { Container, Nav, Image, Row } from "react-bootstrap";

import accent from "../../assets/images/accent.png";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer text-white px-5">
      <Image
        className="accentbar"
        src={accent}
        alt="red and white 3d design"
      ></Image>
      <Row className="col-9">
        <Container className="col-8 my-2 col-md-4">
          <h4>About Me</h4>
          <Nav.Link className="footer-link" href="/">About Me</Nav.Link>
          <Nav.Link className="footer-link" href="/education">Education</Nav.Link>
          <Nav.Link className="footer-link" href="/experience">Experience</Nav.Link>
        </Container>
        <Container className="col-8 my-2 col-md-4">
          <h4>Projects</h4>
          <Nav.Link className="footer-link" href="/symbolsaga">Symbol Saga</Nav.Link>
          <Nav.Link className="footer-link" href="/ssmapeditor">SS Map Editor</Nav.Link>
          <Nav.Link className="footer-link" href="/wordslinger">Word Slinger</Nav.Link>
          <Nav.Link className="footer-link" href="/testimonials">Testimonials</Nav.Link>
        </Container>
        <Container className="col-8 my-2 col-md-4">
          <h4>Contact</h4>
          <Nav.Link className="footer-link" href="/contact">Hire Me</Nav.Link>
          <Nav.Link className="footer-link" href="/resume">Resume</Nav.Link>
        </Container>
      </Row>
    </footer>
  );
};

export default Footer;
