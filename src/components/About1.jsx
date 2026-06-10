import React from 'react'
import './About.css'
import aboutstart from '../assets/aboutstart.png'

const About1 = () => {
  return (
    <div>
      <div className="video-flex">
        <div className='video'>
          <img src={aboutstart} className='start-img' alt="" />
        </div>
        <div className='video-text'>
          <h1 className='how'>How We Start</h1>
          <p className='start-para'>Starting a pharmaceutical business depends on the scale you want to achieve. Options range from launching a marketing company using third-party manufacturers (Pharma Franchise/PCD), opening a wholesale agency, or building your own manufacturing unit. Each path requires strict adherence to local regulations and careful business planning</p>
          <p className='start-para'>Business Registration: Register your company name and obtain a National Tax Number (NTN).Drug License: Secure a wholesale drug license from your local Drug Regulatory Authority (e.g., DRAP if in Pakistan).Brand Name & Trademarks: Register your unique brand names to avoid legal issues.Third-Party Manufacturing: Partner with established manufacturing companies to produce medicines under your brand label.</p>
        </div>
      </div>
    </div>
  )
}

export default About1
