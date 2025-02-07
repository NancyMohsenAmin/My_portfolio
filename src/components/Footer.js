import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../imag/logo-img.png';
import faceicon from '../imag/nav-icon2.svg';
import linkicon from '../imag/nav-icon1.svg';
import giticon from '../imag/github-brands-solid.svg';

 const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <div className="div-fotbrand">
          <img src={logo} alt="Logo" className="logo-img logo-footer"/>
            <h5 className="brand-title brand-footer"> Frontend Developer</h5>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://eg.linkedin.com/in/nancy-mohsen-a81977292"><img src={linkicon} alt="linkedin" /></a>
            <a href="https://www.facebook.com/nancy.nona.2110?locale=ar_AR"><img src={faceicon} alt="facebook" /></a>
            <a href="https://github.com/NancyMohsenAmin" className="git-a"><img class="giticon-siz" src={giticon} alt="githup" /></a>
            </div>
            <p>Copyright 2025.All Rights Reserved.By Nancy Mohsen Amin</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;