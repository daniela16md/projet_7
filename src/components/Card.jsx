import React from 'react'
import '../style/Cards.css'
import Mypackage from '../mypackage.json'
import Packagecard from './Packagecard'

function Card() {
  return (
   <article className='cards'>
      <div className='cardscontent'>
        {Mypackage.map(mypack => (
          <Packagecard key={mypack.id}
           mypack={mypack} 
           />
        ))}
      </div>
   </article>
  )
}


export default Card