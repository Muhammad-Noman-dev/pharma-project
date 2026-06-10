import React from 'react'
import pharma1 from "../assets/pharma1.png";
import './Home.css'
import { useNavigate } from "react-router-dom";
import Supplement from './Supplement';
import Supplement1 from './Supplement1';
import Supplement2 from './Supplement2';
import Footer from './Footer';

const Home = () => {
   const navigate = useNavigate();
  return (
    <div className='main-flex'>
      <img src={pharma1} className='img' />
      <div className='content'>
        <h5>Effective Medicine, New Medicine Everyday</h5>
        <h1>Welcome To Pharma</h1>
        <button className='btn' onClick={()=>navigate("/store")}>SHOP NOW</button>
      </div>
      <div className="main-grid">
        
        <div className='child-grid1'>
          <div><h1>Free Shipping</h1></div>
          <div><h3>Amet Sit Amet Dolor</h3></div>
        </div>
        <div className='child-grid2'>
          <h1>Season Sale 50% Off</h1>
          <h3>Amet sit amet dolor </h3>
        </div>
        <div className='child-grid3'>
          <h1>Buy A Gift Card</h1>
          <h3>Amet sit amet dolor </h3>
        </div>
        
      </div>
      <Supplement/>
      <Supplement1/>
      <Supplement2/>
      <Footer/>
    </div>
  )
}

export default Home
