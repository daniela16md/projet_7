import React from 'react'
import { useState } from 'react';
import arrowup from '../assets/icons/arrow_uppng.png'
import arrowdown from '../assets/icons/arrow_uppng.png'

function Collapse(item, index) {
    const [openIndex, setOpenIndex] = useState(null);

    // Fonction pour gérer le clic sur le titre ou les icônes.
    const toggleDropdown = (index) => {
        // Si la section cliquée est déjà ouverte, on la ferme. Sinon, on l'ouvre.
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className='dropdownopendiv'>
    
            <div className='ddodiv' onClick={() => toggleDropdown(index)}>
                <h2>{index.title}</h2>
                <img 
                    className={`imgddo ${openIndex === index ? '' : 'hidden'}`} 
                    src={arrowup} 
                    alt="arrow up"
                />
                <img 
                    className={`imgdown ${openIndex !== index ? '' : 'hidden'}`} 
                    src={arrowdown} 
                    alt="arrow down"
                />
            </div>
            {openIndex === index && <p className='dropdownp'>{item.text}</p>}
        </div>
        
       
    );
    
   
}

export default Collapse