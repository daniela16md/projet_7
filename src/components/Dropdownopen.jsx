import React, { useState } from 'react';
import '../style/Dropdownopen.css';
import arrowup from '../assets/icons/arrow_uppng.png';
import arrowdown from '../assets/icons/arrrow_downpng.png';

function Dropdownopen() {
    // Utilisation de l'état pour suivre quelle section est ouverte.
    const [openIndex, setOpenIndex] = useState(null);

    // Fonction pour gérer le clic sur le titre ou les icônes.
    const toggleDropdown = (index) => {
        // Si la section cliquée est déjà ouverte, on la ferme. Sinon, on l'ouvre.
        setOpenIndex(openIndex === index ? null : index);
    };

    // Données pour chaque section.
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
            text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title: "Sécurité",
            text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ];

    return (
        <div className='dropdownopendiv'>
            {dropdownData.map((item, index) => (
                <div key={index} className='dropddiv'>
                    <div className='ddodiv' onClick={() => toggleDropdown(index)}>
                        <h2>{item.title}</h2>
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
            ))}
        </div>
    );
}

export default Dropdownopen;