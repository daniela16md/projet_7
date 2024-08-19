import React from 'react'
import image from '../assets/images/water.png'
import './Banner.css'

function Banner() {
  return (
    <div className="banner">
        <img className='bannerimg' src={image} alt="logo" />
        <h1 className='bannerh1'>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner