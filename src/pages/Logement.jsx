import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bannerlogements from '../components/Bannerlogements'
import { useParams} from 'react-router-dom'
import Mypackage from '../mypackage.json'

function Logement() {
  const {id} = useParams()
  const logement = Mypackage.find((logement) => logement.id === id)
 

  return (
    <div>
      <Header/>
      <Bannerlogements logement={logement}/>
      <Footer/>
    </div>
  )
}

export default Logement