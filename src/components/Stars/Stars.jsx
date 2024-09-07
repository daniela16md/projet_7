import React from 'react'
import './Stars.css'
import greystar from '../../assets/icons/start-grey.png'
import redstar from '../../assets/icons/start_red.png'

function Stars({star, maxstar}) {
 
    const starsnumber = [];
   
  for (let i = 1; i <= maxstar; i++) {
    const starClass = i <= star ? redstar : greystar;
    starsnumber.push(
      <img key={i} className="star" src={starClass} alt="star" /> 
    );
  }
  return (
    <div className="rating">
      {starsnumber}
    </div>
  );
  
}; 

export default Stars