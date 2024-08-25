import React from 'react'
import '../style/style.css'
import { Link } from 'react-router-dom';

function Packagecard({mypack}) {
  return (
    <article className="card">
      <img className='cardimg' src={mypack.cover} alt={mypack.title} />
      <h2 className='cardh2'>{mypack.title}</h2>
    </article>
  )
} console.log(Packagecard);

export default Packagecard