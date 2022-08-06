import { Col,Badge } from "react-bootstrap";


export const EventCard = ({ title, description, imgUrl, badge, bg}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <span>{description}</span>
          <br></br>
          <Badge bg={bg}>{badge}</Badge>
          </div>
      </div>
    </Col>
  )
}
