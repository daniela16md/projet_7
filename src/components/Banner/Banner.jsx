import React from 'react'
import './Banner.css'

function Banner({image, text}) {
  return (
    <div className="banner">
      <img className='bannerimg' src={image} alt="logo" />
      <h1 className='bannerh1'>{text}</h1>
    </div>
  )
}

export default Banner