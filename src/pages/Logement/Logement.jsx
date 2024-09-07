import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carrousel from '../../components/Carrousel/Carousel'
import { useParams,Navigate } from 'react-router-dom'
import Mypackage from '../../Card/mypackage.json'
import Logementsinfos from '../../components/Logementsinfos/Logementsinfos'




function Logement() {
  const { id } = useParams()
  const logement = Mypackage.find((logement) => logement.id === id)
  if (!logement ) { return <Navigate to="404" /> }
  
  console.log(logement);

  return (
    <div className='pagecontent' >
      <div className='pagediv'>
        <Header/>
        <Carrousel logement={logement}/>
        <Logementsinfos logement={logement}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Logement