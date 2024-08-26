import React from 'react'
import imgapropos from '../assets/images/sky.png'
import '../style/Bannerapropos.css'

function Bannerapropos() {
  return (
    <div className='bannerapropos'>
      <img className='banneraproposimg' src={imgapropos} alt="" />
    </div>
  )
}

export default Bannerapropos