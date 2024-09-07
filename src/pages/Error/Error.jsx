import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import './Error.css'


function Error() {
  return (
    <div className='pagecontent'>
      <div className='pagediv'> 
        <Header/>
        <div className="errordiv">
          <h1 className='errordivtitle'>404</h1>
          <p className="errorp">Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="errorlink">Retourner sur la page d'accueil</Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Error