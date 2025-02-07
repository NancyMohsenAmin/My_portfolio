import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard  from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projec1 from "../imag/magicbe.png"
import projec2 from "../imag/chare.png"
import projec3 from "../imag/flyrin.png"
import projec4 from "../imag/scencere.png"
import projec5 from "../imag/security.png"
import projec6 from "../imag/shoes.png"
import colorSharp2 from "../imag/bag-sky-blue.jpg"

const Projects = () => {
    const projects = [
      {
        title: "MagicBe Store",
        description: "Css & Html ",
        imgUrl: projec1,
      },
      {
        title: "CheerUp restaurant",
        description: "Css3 & Html5",
        imgUrl: projec2,
      },
      {
        title: "Flyring Website",
        description: "Css3 & Html5 & Bootstrap",
        imgUrl: projec3,
      },
      {
        title: "SkinBeauty Store",
        description: "Css3 & Html5 & Javascript",
        imgUrl: projec4,
      },
      {
        title: "secret key in securty",
        description: "Css3 & Html5 & Javascript",
        imgUrl: projec5,
      },
      {
        title: "Shoes Store",
        description: "Css3 & Html5 & Javascript",
        imgUrl: projec6,
      },
    ];
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>The most prominent projects with distinctive and diverse designs that I worked on during my education and training period, which demonstrate the extent of great development</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Contact Me</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">future projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>An empty space to add all the new upcoming projects and put my experiences and the results of my continuous learning, and see them tomorrow. A space filled with achievements and large, successful and pioneering projects in the field. With my wishes for lasting success.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    )
  }
  export default Projects;