import React from 'react';
import '../style/Bannerlogements.css';
import arrowL from "../assets/icons/arrow_left.png";
import arrowR from "../assets/icons/arrow_right.png";

import { useState } from 'react';

import Stars from '../components/Stars'

import arrowup from '../assets/icons/arrow_uppng.png'


function Bannerlogements({logement}) {
    
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const LeftClick = () => {
        setCurrentIndex(currentIndex === 0 ? logement.pictures.length - 1 : currentIndex - 1);
    };

    const RightClick = () => {
        setCurrentIndex(currentIndex === logement.pictures.length - 1 ? 0 : currentIndex + 1);
    };
  
    return (
        <div className='logement'>
            <div className='bannerSlider'>
                
                <img 
                    className='bannerSliderImg' 
                    src={logement.pictures[currentIndex]} 
                    alt={logement.pictures[currentIndex].title} 
                />
                
                <div className='bannerSliderArrow'>
                    <img 
                        onClick={LeftClick}
                        className="sliderArrow arrowLeft"
                        src={arrowL}
                        alt="Précédente"
                    />
                    <img 
                        onClick={RightClick}
                        className="sliderArrow arrowRight"
                        src={arrowR}
                        alt="Suivante"
                    />
                </div>
                
            </div>
            <div className='logementinfos'>
                <div className='titlediv'>
                    <div className='tittleh2p'>
                        <h2 className='titleh2'>{logement.title}</h2>
                        <p className='tittlep'>{logement.location}</p>
                    </div>
                    
                    <div className='asideround'>
                    <p className='asideroundp'>{logement.host.name} </p>
                        <img className='asideroundimg' src={logement.host.picture}alt="" />
                    </div>
                </div>
                <div className='infos'>
                   
                    <ul className='infosdatas'>
                        {logement.tags.map((tag, index) => (
                            <li className='data' key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                
                    <div className='asidestars'>
                        < Stars star={logement.rating} maxstar={5} />
                    </div>
                    
                </div>
                <div className='descriptionequipement'>
                    <div className='descdiv'>
                        <div className='description'>
                            <p>Description</p>
                            <img className='descriptionimg' src={arrowup} alt="" />
                        </div>
                        <p className='descriptionp'>{logement.description}</p>
                    </div>
                
                    <div className='descdiv'>
                        <div className='description'>
                            <p>Èquipement</p>
                            <img className='descriptionimg' src={arrowup} alt="" />
                        </div>
                        <p className='descriptionp'>{logement.equipments.map((equipment, index) => (
                            <li className='li' key={index}>
                                {equipment}
                            </li> ))}
                        </p>
                       
                    </div>
                </div>

            </div>
            
        </div>
            
    );
}


export default Bannerlogements