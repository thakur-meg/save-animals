import React from 'react'
import '../styles/about.css'
import { ListGroup } from 'react-bootstrap'


export const About = () => {
  return (
    <section className="about" id="about">
    <ListGroup horizontal>
      <div><h2>About Us</h2>
      <p>We are a group of individuals that strive to make this Earth a better place for the future. This future also includes the fauna and flora around us. Many of us are not aware about the ever changing climate and the adversities it is bringing along over us. We hope to make a change and in that, we need your help. Every step in the direction of sustainable future, helps us save another animals life.</p>
      <p>Over a million species of animal and plant life are now threatened with dying out- more than ever before in human history, according to the International Science-Policy Platform on Biodiversity and Ecosystem Services. There has been an average 68% drop in global population sizes of amphibians, birds, fish mammals and reptiles between 1970 and 2016, according to the WWF's Living Planet Report 2020. Species are dying off 1,000 times more frequently today than during the 60 million years before the arrival of humans, according to a 2014 study by Brown University in the US. The report reinforces the “urgency to conserve what is left”, said lead author Jurriaan de Vos.</p>
      <p> Your every small help can bring a big change. It can be either the atttendace in our events or donating to our cause.</p>
      <p>To learn more about how you can make a direct change, you can see our volunteer program.</p>
      </div>
      </ListGroup>
    </section>
  )
}
