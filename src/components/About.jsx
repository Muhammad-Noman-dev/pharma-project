import React from 'react'
import about6 from '../assets/about6.png'
import './About.css'
import About1 from './About1'
import About2 from './About2'
import Footer from './Footer'

const About = () => {
  return (
    <div>
    <div className='about-flex'>
      <img src={about6} className='about-img' alt="" />
      <div className='about-child'>
        <h1 className='about-heading'>ABOUT US</h1>
        <h3 className='about-para'>At our pharmacy, we are committed to providing high-quality medicines, healthcare products, and professional pharmaceutical services to support the well-being of our community. Our goal is to ensure that every customer receives safe, effective, and affordable healthcare solutions.

        With a focus on trust, quality, and customer care, we work closely with healthcare professionals and trusted suppliers to deliver reliable products and services. Whether you need prescription medications, over-the-counter medicines or health advice, our dedicated team is here to help.

        Your health is our priority, and we strive to make healthcare accessible, convenient, and dependable for everyone.</h3>
           
      </div>
      
      
    </div>
    <About1/>
    <About2/>
    <Footer/>

    </div>
  )
}

export default About
