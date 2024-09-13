import React from 'react';
import "./Header.css";
import logo from '../../assets/logo/LOGO.png'
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <img className="headerlogo" src={logo} alt="Kasa logo" />  
      <nav>
          <ul className='headerlist'>
          <li className='lih'>
            <Link
              className={`headerli ${location.pathname === '/' ? 'active' : ''}`}
              to="/"> Accueil
            </Link>
          </li>
          <li className='lih'>
            <Link
              className={`headerli ${location.pathname === '/apropos' ? 'active' : ''}`}
              to="/apropos" > À propos
            </Link>
          </li>
          </ul>
      </nav>      
    </div>
  )
}

export default Header