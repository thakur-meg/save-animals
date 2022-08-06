import { Container, Row } from "react-bootstrap";
import { EventCard } from "./EventCard";
import event1 from "../assets/img/event1.png";
import event3 from "../assets/img/event2.png";
import event2 from "../assets/img/event3.png";
import 'animate.css';
import '../styles/events.css';
import { LifePreserver } from "react-bootstrap-icons";

export const Events = () => {

  const events = [
    
    {
      description: "Cleaning the Oceans is important for water flora and fauna.",
      imgUrl: event3,
      badge: "Event Live",
      bg: "success",
    },
    {
      description: "Ice caps are melting around the globe and we need to save them.",
      imgUrl: event2,
      badge: "Event Live",
      bg: "success",
    },
    {
      description: "A movement against the rampant illegal poaching around the world.",
      imgUrl: event1,
      badge: "Event Over",
      bg: "danger",
    },
    
  ];

  return (
    <section className="event" id="events">
      <h2>Events</h2>
      <p>Over the span of the year, we conduct variety of events and seminars to spread awareness about our cause. Along with that, we also move to make our events approachable for general audience.</p>
      <Container>
        <Row>
            {
              events.map((event, index) => {
                return (
                  <EventCard
                    key={index}
                    {...event}
                        />
                        )})
                }
        </Row>
      </Container>
    </section>
  )
}
