import React from 'react'
import './Store.css'
import her5 from '../assets/her5.png'
import her6 from '../assets/her6.png'
import her7 from '../assets/her7.png'


const Store1 = () => {
  return (
    <div>
      
      <div>
        <div className="store-grid">
        <div className="stor-child1">
          <img className='imgp2' src={her5} alt="" />
          <div>
            <h2>Glucobex-- Rs2250 PKR</h2>

          </div>
        </div>
        <div className="stor-child2">
          <img src={her6} alt="" />
          <div>
            <h2>B-Complex (Combination of All B-Vitamins)
--Rs1150 PKR</h2>
          </div>
        </div>
        <div className="stor-child3">
          <img src={her7} alt="" />
          <div>
            <h2>Herbiotics White-Vit l Glutathione, Collagen & Vitamin C For White Skin
 -- RS 999 PKR</h2>
          </div>
        </div>
      </div>
      </div>

      
    </div>
      
      
    
  )
}

export default Store1
