import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon5.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-center">
          <Col size={12} sm={6} className="padding-bottom">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aryan-kumar-b2408525b/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/aryan5318">
                <img src={navIcon2} alt="" className="github" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved To Aryan-Portfolio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
