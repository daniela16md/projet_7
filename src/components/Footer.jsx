import React from 'react'
import logofooter from '../assets/logo/logo footer.png'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='logofooter'>
            <img src={logofooter} alt="Logo Footer" />
        </div>
        <div className='footertext'>©2020 Kasa. All right reserved.</div>
    </div>
  )
}

export default Footer