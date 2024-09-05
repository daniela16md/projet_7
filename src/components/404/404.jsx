import React from 'react'
import { Link } from 'react-router-dom';

import './Error.css'

function Error4() {
  return (
    <div className="errordiv">
      <h1 className='errordivtitle'>404</h1>
      <p className="errorp">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="errorlink">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error4