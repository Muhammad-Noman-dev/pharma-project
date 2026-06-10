import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <hr className='hr'/>
      <div className='home-grid'>
        <div className="home-childgrid">
            <h2 className='sup-heading'>About Us.</h2>
            <p className='sup-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo eveniet eligendi ea enim amet, est nihil officiis molestiae eos ipsum vel dolore odio ipsa doloribus incidunt! Eveniet dolor animi excepturi?</p>
        </div>
        <div className="home-childgrid">
            <h2 className='sup-heading'>Contact Us.</h2>
            <p className='sup-para'>📍 203 Fake St. Mountain View<br/> Francisco, California, USA</p>
            <p className='sup-para'>📞 92 321 1234567</p>
            <p className='sup-para'>📩 Pharma.test@Domain.com</p>
        </div>
        
      </div>
      <h3 className='copy'>Copyright © 2026 All rights reserved</h3>
    </div>
  )
}

export default Footer
