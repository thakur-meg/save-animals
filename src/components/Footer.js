import { Container, Row, Col } from "react-bootstrap";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import twitter from "../assets/img/twitter.svg";
import '../styles/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <h2>STA</h2>
            <p>Contact Us</p>
            <p>savetheanimals@email.com</p>
            <p>(+91)0000000000</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com"><img src={facebook} alt="Icon" /></a>
              <a href="https://instagram.com"><img src={instagram} alt="Icon" /></a>
              <a href="https://twitter.com"><img src={twitter} alt="Icon" /></a>
            </div>
            <p>Join us on social media.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
