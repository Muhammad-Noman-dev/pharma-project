import React from 'react'
import './Store.css'
import sup6 from '../assets/sup6.png'
import sup7 from '../assets/sup7.png'
import sup8 from '../assets/sup8.png'
import home from '../assets/home.png'



const Supplement2 = () => {
  return (
    <div>
      
      <div>
        <div className="store-grid">
        <div className="stor-child1">
          <img className='imgp2' src={sup6} alt="" />
          <div>
            <h2>Antarctic Krill Oil with Astaxanthin, Choline, Omega 3, DHA, EPA Superior.
</h2>

          </div>
        </div>
        <div className="stor-child2">
          <img src={sup7} alt="" />
          <div>
            <h2>Digest Complete® Chewable
</h2>
          </div>
        </div>
        <div className="stor-child3">
          <img src={sup8} alt="" />
          <div>
            <h2>Berberine Balance with Vitamin K2 + E Purovitalis.</h2>
          </div>
        </div>
      </div>
      </div>

      <img src={home}  className='home-img' alt="" />
      
    </div>
      
      
    
  )
}

export default Supplement2
