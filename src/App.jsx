import React, { useState } from 'react'
import { Route , BrowserRouter, Routes , Link , NavLink  } from 'react-router-dom'
import Home from './components/Home'
import Store from './components/Store'
import Dropdown from './components/Dropdown'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

const App = () => {
  const [isopen , setisopen] = useState(false);
  const toggleMenu =()=> setisopen(!isopen);
  return (
    <div>
      <nav className='navlink'>
        <h2 className='heading'>PHARMA</h2>
        <div >
          <ul className={`nav-links ${isopen ? "open" : ""}`}>
            <li><Link to="/">HOME</Link></li>
            <li><NavLink to="/store">STORE</NavLink></li>
            <div className="dropdown">
              <li><button to="/dropdown" className="dropbtn" onClick={toggleMenu}>DROPDOWN</button></li>
            <div >
              <ul className={`drop-menu ${isopen ? "open-menu" : ""}`}>
                <li><Link>Suppliments</Link></li>
                <li><Link>Vitamin</Link></li>
                <li><Link>Diet & Nutrition</Link></li>
                <li><Link>Medicines</Link></li>
              </ul>
            </div>
            </div>
            <li><NavLink to="/about">ABOUT</NavLink></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li>
          </ul>
          
        
        
        
        
        </div>
        <button className='ham' onClick={toggleMenu}>&#9776;</button>

      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/dropdown" element={<Dropdown/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      
    </div>
  )
}

export default App
