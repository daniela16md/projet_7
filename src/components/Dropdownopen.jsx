import React from 'react'
import '../style/style.css'
import arrowup from '../assets/icons/arrow_uppng.png';

function Dropdownopen() {
  return (
    <div className='dropdownopendiv'>
        <div className='ddodiv'>
            <h2>Fiabilité</h2>
            <img className='imgddo' src={arrowup} alt="" />
        </div>
        <div className='ddodiv'>
            <h2>Respect</h2>
            <img className='imgddo' src={arrowup} alt="" />
        </div>
        <div className='ddodiv'>
            <h2>Service</h2>
            <img className='imgddo' src={arrowup} alt="" />
        </div>
        <div className='ddodiv'>
            <h2>Sécurité</h2>
            <img className='imgddo' src={arrowup} alt="" />
        </div>
    </div>
  )
}

export default Dropdownopen