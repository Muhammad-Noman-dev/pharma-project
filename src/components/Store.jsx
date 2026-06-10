import React from 'react'
import './Store.css'
import her4 from '../assets/her4.png'
import her2 from '../assets/her2.png'
import her3 from '../assets/her3.png'
import Store1 from './Store1'
import Store2 from './Store2'
import Store3 from './Store3'
import Footer from './Footer'


const Store = () => {
  return (
    <div>
      <h1 className='product'>PRODUCTS</h1>
      <div>
        <div className="store-grid">
        <div className="stor-child1">
          <img className='imgp2' src={her4} alt="" />
          <div>
            <h2>Herlic (Omega 3 Fish Oil) -- Rs1350 PKR</h2>

          </div>
        </div>
        <div className="stor-child2">
          <img src={her2} alt="" />
          <div>
            <h2>Herbi-C(Vitamin C + Zinc)--Rs650 PKR</h2>
          </div>
        </div>
        <div className="stor-child3">
          <img src={her3} alt="" />
          <div>
            <h2>Herbiotics Multipill | 22 Micronutrients, Support Men's Overall Health -- RS 799 PKR</h2>
          </div>
        </div>
      </div>
      </div>
      
      <Store1/>
      <Store2/>
      <Store3/>
      <Footer/>
    </div>
      
      
    
  )
}

export default Store
