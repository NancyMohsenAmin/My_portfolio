import { Col } from "react-bootstrap";

 const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4} xs={6}>
      <div className="proj-imgbx">
        <img src={imgUrl}  className="img-hegh"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
export default ProjectCard;