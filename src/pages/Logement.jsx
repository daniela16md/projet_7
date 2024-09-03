import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bannerlogements from '../components/Bannerlogements'
import { useParams,Navigate } from 'react-router-dom'
import Mypackage from '../mypackage.json'



function Logement() {
  const { id } = useParams()
  const logement = Mypackage.find((logement) => logement.id === id)
  if (!logement ) { return <Navigate to="404" /> }
  
  console.log(logement);

  return (
    <div className='pagecontent' >
      <Header/>
      <Bannerlogements logement={logement}/>
      <Footer/>
    </div>
  )
}

export default Logement