import React from 'react'
import './Store.css'
import her11 from '../assets/her11.png'
import her12 from '../assets/her12.png'
import her13 from '../assets/her13.png'


const Store3 = () => {
  return (
    <div>
      
      <div>
        <div className="store-grid">
        <div className="stor-child1">
          <img className='imgp2' src={her11} alt="" />
          <div>
            <h2>Herbiotics Prezoom Saw  -- Rs 599 PKR
</h2>

          </div>
        </div>
        <div className="stor-child2">
          <img src={her12} alt="" />
          <div>
            <h2>Multilife Women Multivitamin-- RS 1200 PKR
</h2>
          </div>
        </div>
        <div className="stor-child3">
          <img src={her13} alt="" />
          <div>
            <h2> Biotin Plus - Hair Growth -- Rs 1650 PKR
</h2>
          </div>
        </div>
      </div>
      </div>

      
    </div>
      
      
    
  )
}

export default Store3
