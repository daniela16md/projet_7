import React from 'react'
import './Card.css'
import imagecard from '../assets/images/card.png'

function Card() {
  return (
   <article className='card'>
        <img className='imgecard' src={imagecard} alt="" />
        <img className='imgecard' src={imagecard} alt="" />
        <img className='imgecard' src={imagecard} alt="" />
        <img className='imgecard' src={imagecard} alt="" />
        <img className='imgecard' src={imagecard} alt="" />
        <img className='imgecard' src={imagecard} alt="" />
   </article>
  )
}


export default Card