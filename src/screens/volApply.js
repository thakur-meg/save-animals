import React from 'react'
import BrandNavbar from '../components/BrandNavbar'
import '../styles/volApply.css'
import {Contact} from '../components/Contact'


function VolApply() {

  return (
    <div>
      <BrandNavbar />
      <section className='volApply'>
      </section>
      <section className='form'>
        <h2>Fill the given below form to showcase you interest in the volunteer program.</h2>
        <Contact />
      </section>
    </div>
  )
}

export default VolApply