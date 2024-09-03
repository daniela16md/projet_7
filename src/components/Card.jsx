import React from 'react'
import '../style/Cards.css'
import Mypackage from '../mypackage.json'
import Packagecard from '../components/Packagecard'

function Card() {
  return (
    <section className='cardcontent'>  
      {Mypackage.map(Mypackage => (
        <Packagecard key={Mypackage.id}
          Mypackage={Mypackage} 
          />
      ))} 
    </section>
  )
}


export default Card