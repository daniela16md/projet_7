import React from 'react';
import "../style/Header.css";
import logo from '../assets/logo/LOGO.png'
import { Link } from 'react-router-dom';




function Header() {
  return (
    <div className="header">
      <img className="headerlogo" src={logo} alt="" />  
      <nav>
          <ul className='headerlist'>
            <li className='lih'>
              <Link className="headerli" to="/">Accueil</Link>
            </li>
            <li className='lih'>
              <Link className="headerli" to="/apropos">À propos</Link>
            </li>
          </ul>
      </nav>      
    </div>
  )
}

export default Header