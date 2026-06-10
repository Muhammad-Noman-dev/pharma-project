import React from 'react'
import './About.css'
import trust from '../assets/trust.png'

const About2 = () => {
  return (
    <div>
      <div className="video-flex">
        
        <div className='video-text'>
          <h1 className='how'>We Are Trusted Company</h1>
          <p className='start-para'>We are a trusted pharmaceutical company dedicated to improving global health and well-being. Built on a foundation of scientific integrity and strict regulatory compliance, we specialize in developing, manufacturing, and delivering high-quality, reliable medicines.</p>
          <p className='start-para'>Patient safety and efficacy are at the heart of everything we do. By combining cutting-edge technology with rigorous quality assurance protocols, we ensure that every product leaving our facilities meets the highest industry standards. We are proud to be a partner that healthcare professionals and patients can rely on every single day.</p>
        </div>
        <div className='video'>
          <img src={trust} className='start-img' alt="" />
        </div>
      </div>
    </div>
  )
}

export default About2
