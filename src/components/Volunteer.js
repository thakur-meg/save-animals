import React from 'react'
import '../styles/volunteer.css'
import volImg from '../assets/img/volunteer.jpg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Volunteer = () => {
  return (
    <section className="volunteer" id="volunteer">
        <div className="text">
        <h2>Volunteer</h2>
        <h3>Join our team of our volunteers and make a change in the world.</h3>
        <p>If you are a keen admirer of nature, and are willing to work for its future, the program is for you. Take steps with us to undo the negative impact the humans are leaving behind and bring our motto to light.</p>
        <p>If this sounds like something you are interested in, then apply for our volunteer. Also, you get to connect with like minded people from across the globe who are striving everyday to make this Earth more liveable for all.</p>
        <Link to={"/volApply"}><Button>Apply</Button></Link>
        </div>
        <div className="image">
            <img src={volImg}/>
        </div>
    </section>

  )
}

export default Volunteer