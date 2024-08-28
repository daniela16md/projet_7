import React from 'react'
import '../style/Stars.css'

function Stars(star, maxstar) {
 
    const starsnumber = [];
    for (let i = 1; i <= maxstar; i++) {
        const starClass = i <= star ? 'full' : 'empty';
        starsnumber.push
            (<i key={i} className={`fa-solid fa-star star ${starClass}`}></i>)
    }
    return (
        <div className="rating">
            {starsnumber}
        </div>
    );
  
};

export default Stars