import React from 'react'
import './Store.css'
import sup3 from '../assets/sup3.png'
import sup4 from '../assets/sup4.png'
import sup5 from '../assets/sup5.png'


const Supplement1 = () => {
  return (
    <div>
      
      <div>
        <div className="store-grid">
        <div className="stor-child1">
          <img className='imgp2' src={sup3} alt="" />
          <div>
            <h2>MELATONIN Sleep</h2>

          </div>
        </div>
        <div className="stor-child2">
          <img src={sup4} alt="" />
          <div>
            <h2>Ginkgo | Ginkgo Biloba Tablets for Brain
</h2>
          </div>
        </div>
        <div className="stor-child3">
          <img src={sup5} alt="" />
          <div>
            <h2>Supplement Needs Whey ISO+ - 1kg </h2>
          </div>
        </div>
      </div>
      </div>

      
    </div>
      
      
    
  )
}

export default Supplement1
