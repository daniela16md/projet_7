import React from 'react'
import '../style/Cards.css'
import Mypackage from '../mypackage.json'
import Packagecard from './Packagecard'

function Card() {
  return (
   <article className='cards'>
      <div className='cardscontent'>
        {Mypackage.map(Mypackage => (
          <Packagecard key={Mypackage.id}
           Mypackage={Mypackage} 
           />
        ))}
      </div>
   </article>
  )
}


export default Card