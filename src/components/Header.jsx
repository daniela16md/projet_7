import React from 'react';
import "./Header.css";
import logo from '../assets/logo/LOGO.png'


function Header() {
  return (
    <div className="navbar">
        <img className="navbarlogo" src={logo} alt="" />  
        <nav>
            <ul className='navbarlist'>
                <li>Accueil</li>
                <li>A Propos</li>
            </ul>
        </nav>      
        
    </div>
  )
}

export default Header