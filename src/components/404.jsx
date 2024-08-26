import React from 'react'
import { Link } from 'react-router-dom';
import errorimg from '../assets/images/error.png';
import '../style/Error.css'

function Error4() {
  return (
    <div className="errordiv">
      <img src={errorimg} alt="" />
      <p className="errorp">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="errorlink">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error4