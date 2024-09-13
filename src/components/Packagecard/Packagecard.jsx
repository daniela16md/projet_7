import React from 'react'
import './Packagecard.css'
import { Link } from 'react-router-dom'


function Packagecard({Mypackage}) { 

  return (
   
    <Link to={"/logement/" + Mypackage.id}>
      <article className="card">
        <img className='cardimg' src={Mypackage.cover} alt={Mypackage.title} />
        <h2 className='cardh2'>{Mypackage.title}</h2>
      </article>
    </Link>
  )
  
}

export default Packagecard