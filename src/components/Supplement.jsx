import React from 'react'
import './Store.css'
import sup from '../assets/sup.png'
import sup1 from '../assets/sup1.png'
import sup2 from '../assets/sup2.png'


const Supplement = () => {
  return (
    <div>
      <h1 className='sup'>OUR POPULAR PRODUCTS</h1>
      <div>
        <div className="store-grid">
        <div className="stor-child1">
          <img className='imgp2' src={sup} alt="" />
          <div>
            <h2>18 Free Dietary Supplement</h2>

          </div>
        </div>
        <div className="stor-child2">
          <img src={sup1} alt="" />
          <div>
            <h2>HighQuality-Protein-Powder-PNG-Image-for-Health-and-Fitness
</h2>
          </div>
        </div>
        <div className="stor-child3">
          <img src={sup2} alt="" />
          <div>
            <h2>Apple Cider Vinegar Detoxification & Healthy Weight Management*</h2>
          </div>
        </div>
      </div>
      </div>

      
    </div>
      
      
    
  )
}

export default Supplement
