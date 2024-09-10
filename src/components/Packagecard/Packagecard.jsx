import React from 'react'
import './Packagecard.css'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import Loader from '../Laoder/Loader'



function Packagecard({Mypackage}) {
  const [loading, setLoading] = useState(true)
    useEffect(()=> {

    setTimeout(() => {
      setLoading(false)
    }, 3000);

  }, [])

  return (
    loading ? (
      <Loader/>
    ) : (
      <Link to={"/logement/" + Mypackage.id}>
        <article className="card">
          <img className='cardimg' src={Mypackage.cover} alt={Mypackage.title} />
          <h2 className='cardh2'>{Mypackage.title}</h2>
        </article>
      </Link>
    )
  );
}

export default Packagecard