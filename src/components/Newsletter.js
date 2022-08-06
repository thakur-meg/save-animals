import '../styles/newsletter.css'
import {React, useState, useEffect } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'


const Subscribe = ({onValidated, status, message}) => {
    const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }
    
  return (
    <section className="newsletter" id="connect">
        <Row className='newsletter-bx'>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our newsletter for updates.</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
        </Row>
    </section>
  )
}

export default Subscribe