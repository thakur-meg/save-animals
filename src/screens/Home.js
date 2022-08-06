import React from 'react'
import { Banner } from "../components/Banner";
import { Events } from "../components/Events";
import { About } from "../components/About";
import { Divider } from '../components/Divider';
import Volunteer from '../components/Volunteer';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Divider />
      <Events />
      <Volunteer />
      <Newsletter />
    </div>
  )
}

export default Home