import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../imag/logo-img.png';
import faceicon from '../imag/nav-icon2.svg'
import linkicon from '../imag/nav-icon1.svg'
import giticon from '../imag/github-brands-solid.svg'
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
  
    return (
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="http://localhost:3001/#connect">
            <img src={logo} alt="Logo" className="logo-img"/>
            <h5 className="brand-title"> Frontend Developer</h5>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://eg.linkedin.com/in/nancy-mohsen-a81977292"><img src={linkicon} alt="linkedin" /></a>
                  <a href="https://www.facebook.com/nancy.nona.2110?locale=ar_AR"><img src={faceicon} alt="facebook" /></a>
                  <a href="https://github.com/NancyMohsenAmin" className="git-a"><img class="giticon-siz" src={giticon} alt="githup" /></a>
                </div>
                <HashLink to='#connect'>
                  <button className="vvd"><span>Let’s Connect</span></button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    )
  }
  export default NavBar;
