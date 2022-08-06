import React from 'react'
import { Banner } from "../components/Banner";
import { Events } from "../components/Events";
import { About } from "../components/About";
import { Divider } from '../components/Divider';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Divider />
      <Events />
    </div>
  )
}

export default Home