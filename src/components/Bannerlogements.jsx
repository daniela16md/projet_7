import React from 'react';
import '../style/Bannerlogements.css';
import '../style/Dropdownopen.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useState } from 'react';
import Stars from '../components/Stars'

import Mypackage from '../mypackage.json'



function Bannerlogements({logement}) {
    
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const LeftClick = () => {
        setCurrentIndex(currentIndex === 0 ? logement.pictures.length - 1 : currentIndex - 1);
    };

    const RightClick = () => {
        setCurrentIndex(currentIndex === logement.pictures.length - 1 ? 0 : currentIndex + 1);
    };

    const {  equipments } = logement;

    const [openIndex, setOpenIndex] = useState(null);

    // Fonction pour gérer le clic sur le titre ou les icônes.
    const toggleDropdown = (index) => {
        // Si la section cliquée est déjà ouverte, on la ferme. Sinon, on l'ouvre.
        setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
        <div className='logement'>
            <section className='bannerSlider'>
                
                <img 
                    className='bannerSliderImg' 
                    src={logement.pictures[currentIndex]} 
                    alt={logement.pictures[currentIndex].title} 
                />
                
                <div className='bannerSliderArrow'>
                    <MdOutlineArrowBackIosNew className='slideArrow arrowLeft' onClick={LeftClick} />
                    <MdOutlineArrowBackIosNew className='slideArrow arrowRight' onClick={RightClick} />
                </div>
                <p className='bannerCount'>{currentIndex + 1} / {logement.pictures.length}</p>
                
            </section>
            <section className='logementsinfos'>
            
                <div className='titlediv'>
                    <div className='tittleh2p'>
                        <h2 className='titleh2'>{logement.title}</h2>
                        <p className='tittlep'>{logement.location}</p>
                    </div>
                    <div className='infostags'>
                        <ul className='infostagsul'>
                            {logement.tags.map((tag, index) => (
                                <li className='infostagsli' key={index}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>

                <div className='infosaside'>
                    <div className='asideround'>
                        <p className='asideroundp'>{logement.host.name} </p>
                            <img className='asideroundimg' src={logement.host.picture}alt="" />
                    </div>
                    
                    <div className='asidestars'>
                        < Stars star={logement.rating} maxstar={5} />
                    </div>
                        
                </div>
                
            </section>

            <section className="descriptionequipement">

                <div className='dropdownopendiv'>
                    {Mypackage.map((index) => (
                        <div key={index} className='dropddiv'>
                            <div className='ddodiv' onClick={() => toggleDropdown(index)}>
                                <h2>description</h2>
                                <MdOutlineArrowBackIosNew className={`arrow ${openIndex === index ? '' : 'arrowdown'}`} />
                            </div>
                            {openIndex === index && <p className='dropdownp'>{logement.description}</p>} 
                                            
                        </div>
                    ))}
                </div>
                <div className='dropdownopendiv'>
                    {Mypackage.map((index) => (
                        <div key={index} className='dropddiv'>
                            <div className='ddodiv' onClick={() => toggleDropdown(index)}>
                                <h2>Equipement</h2>
                                <MdOutlineArrowBackIosNew className={`arrow ${openIndex === index ? '' : 'arrowdown'}`} />
                            </div>
                            {openIndex === index && <ul className='dropdownp'>{equipments.map((equipment, index) => (
                        <li className="description-item" key={index}>
                            {equipment}
                        </li>
                        ))}</ul>} 
                                            
                        </div>
                    ))}
                </div>
                
            </section>
            
        </div>
            
    );
}


export default Bannerlogements