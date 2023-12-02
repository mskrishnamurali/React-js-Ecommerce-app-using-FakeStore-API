import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header() {
  return (
    <div>
        <header className='header'>
          <div className='nav_container'>
            <div className='logo'>
              <div className='logo-img'>
                   <img src={logo} alt=''/>
                  
              </div>
              </div> 
          </div>
          <Link to='/' style={{textDecoration:'none',color:'#fff'}}>
            <h1>RabbitZone</h1>
            </Link> 
            <Link to='/logout'>
             <button className='logout-btn'>Log-Out</button>
             </Link>
        </header>
      
    </div>
  )
}

export default Header
