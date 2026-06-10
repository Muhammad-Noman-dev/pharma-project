import React from 'react'
import './Store.css'
import her8 from '../assets/her8.png'
import her9 from '../assets/her9.png'
import her10 from '../assets/her10.png'


const Store2 = () => {
  return (
    <div>
      
      <div>
        <div className="store-grid">
        <div className="stor-child1">
          <img className='imgp2' src={her8} alt="" />
          <div>
            <h2>Best Magnesium Supplements in Pakistan For Muscle & Nerve Health

--Rs1250 PKR</h2>

          </div>
        </div>
        <div className="stor-child2">
          <img src={her9} alt="" />
          <div>
            <h2>Fair & Glow Bundle (2X Brighter Skin-Glutathione & Vitamin C )
 -- RS 1999 PKR</h2>
          </div>
        </div>
        <div className="stor-child3">
          <img src={her10} alt="" />
          <div>
            <h2>Buy Premium Supplements For Healthy & Active Life 
-- Rs1559 PKR</h2>
          </div>
        </div>
      </div>
      </div>

      
    </div>
      
      
    
  )
}

export default Store2
