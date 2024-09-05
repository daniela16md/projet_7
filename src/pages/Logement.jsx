import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Bannerlogements from '../components/Bannerlogements/Bannerlogements'
import { useParams,Navigate } from 'react-router-dom'
import Mypackage from '../components/Card/mypackage.json'



function Logement() {
  const { id } = useParams()
  const logement = Mypackage.find((logement) => logement.id === id)
  if (!logement ) { return <Navigate to="404" /> }
  
  console.log(logement);

  return (
    <div className='pagecontent' >
      <div className='pagediv'>
        <Header/>
        <Bannerlogements logement={logement}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Logement