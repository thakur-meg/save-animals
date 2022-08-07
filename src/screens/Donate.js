import React from 'react'
import TrackVisibility from 'react-on-screen';
import '../styles/donate.css';
import { Button, Card } from 'react-bootstrap';
import donation1 from '../assets/img/donation1.png'
import donation2 from '../assets/img/donation2.png'
import BrandNavbar from '../components/BrandNavbar'


const Donate = () => {
  return (
    <div>
    <BrandNavbar/>
    <section className='topbanner'>
        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Small donation can make a change.</span>
              </div>}
        </TrackVisibility>
    </section>
    <section className='donations'>
        <h2>You can choose between one of the two donations plans listed below:</h2>
        <section className='donation-bx'>
        <Card style={{ width: '25rem' }} className="donation-card">
          <Card.Img variant="top" src={donation1} />
          <Card.Body>
            <Card.Title>One Time Donation</Card.Title>
            <Card.Text>
              You can make a variable amount one time donation to our cause.
              <br></br>
              Get a free save-the-animals sticker.
            </Card.Text>
            <Button href="https://rzp.io/l/CnyHKPs" target="_blank" size="lg" className="button">Donate</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }} className="donation-card">
          <Card.Img variant="top" src={donation2} />
          <Card.Body>
            <Card.Title>Monthly Donations</Card.Title>
            <Card.Text>
              You can make a monthly donation of &#x20B9;400 to our cause.
              <br></br>
              Get a free save-the-animals sticker and tote bag.
            </Card.Text>
            <Button href="https://rzp.io/i/EdTNM1M3k" target="_blank" size="lg" className="button">Donate</Button>
          </Card.Body>
        </Card>
        </section>
    </section>
    </div>
  )
}

export default Donate