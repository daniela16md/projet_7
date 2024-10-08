import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import imgsky from '../../assets/images/sky.webp'
import Collapse from '../../components/Collapse/Collapse'
import '../Apropos/Aproposdiv.css'


function Apropos() {
  
  const dropdownData = [
    {
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title: "Service",
      text: "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction,que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
    },
    {
      title: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

  return (
   
    <div className='pagecontent'>
      <div className=' pagediv'>
        <Header/>
        <Banner image={imgsky}/>
        <div className='aproposdiv'>
          {dropdownData.map((item, index) => (
            <Collapse key={index} title={item.title}>
              <p className='description-content'>{item.text}</p> 
            </Collapse>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Apropos