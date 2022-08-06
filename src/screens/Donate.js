import React from 'react'
import TrackVisibility from 'react-on-screen';
import '../styles/donate.css';


const Donate = () => {
  return (
    <div>
    <section className='topbanner'>
        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Small donation can make a change.</span>
              </div>}
        </TrackVisibility>
    </section>
    <section className='donations'>
        <h2>You can choose between one of the two plans.</h2>
    </section>
    </div>
  )
}

export default Donate