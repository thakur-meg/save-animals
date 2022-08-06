import { Container, Row, Col, Carousel } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../styles/banner.css';

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">SAVE THE ANIMALS</span>
              </div>}
            </TrackVisibility>
      </Container>
    </section>
  )
}
