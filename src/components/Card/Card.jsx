import React from 'react'
import './Cards.css'
import Mypackage from '../Card/mypackage.json'
import Packagecard from '../Packagecard/Packagecard'

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