import React from 'react'
import { Banner } from "../components/Banner";
import { Events } from "../components/Events";
import { About } from "../components/About";
import { Divider } from '../components/Divider';
import Volunteer from '../components/Volunteer';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Divider />
      <Events />
      <Volunteer />
    </div>
  )
}

export default Home