import React from 'react';
import '../style/Bannerlogements.css';
import arrowL from "../assets/icons/arrow_left.png";
import arrowR from "../assets/icons/arrow_right.png";
import Mypackage from '../mypackage.json';
import { useState } from 'react';
import Stars from '../components/Stars'

import arrowup from '../assets/icons/arrow_uppng.png'


function Bannerlogements() {
    

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftClick = () => {
        setCurrentIndex(currentIndex === 0 ? Mypackage.length - 1 : currentIndex - 1);
    };

    const handleRightClick = () => {
        setCurrentIndex(currentIndex === Mypackage.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className='logement'>
            <div className='bannerSlider'>
                
                <img 
                    className='bannerSliderImg' 
                    src={Mypackage[currentIndex].cover} 
                    alt={Mypackage[currentIndex].title} 
                />
                
                <div className='bannerSliderArrow'>
                    <img 
                        onClick={handleLeftClick}
                        className="sliderArrow arrowLeft"
                        src={arrowL}
                        alt="Précédente"
                    />
                    <img 
                        onClick={handleRightClick}
                        className="sliderArrow arrowRight"
                        src={arrowR}
                        alt="Suivante"
                    />
                </div>
                
            </div>
            <div className='logementinfos'>
                <div className='titlediv'>
                    <div className='tittleh2p'>
                        <h2 className='titleh2'>{Mypackage[currentIndex].title}</h2>
                        <p className='tittlep'>{Mypackage[currentIndex].location}</p>
                    </div>
                    
                    <div className='asideround'>
                    <p className='asideroundp'>{Mypackage[currentIndex].host.name} </p>
                        <img className='asideroundimg' src={Mypackage[currentIndex].host.picture}alt="" />
                    </div>
                </div>
                <div className='infos'>
                   
                    <ul className='infosdatas'>
                        {Mypackage[currentIndex].tags.map((tag, index) => (
                            <li className='data' key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                
                    <div className='asidestars'>
                        < Stars star={Mypackage[currentIndex].rating} maxstar={5} />
                    </div>
                    
                </div>
                <div className='descriptionequipement'>
                    <div className='descdiv'>
                        <div className='description'>
                            <p>Description</p>
                            <img className='descriptionimg' src={arrowup} alt="" />
                        </div>
                        <p className='descriptionp'>{Mypackage[currentIndex].description}</p>
                    </div>
                
                    <div className='descdiv'>
                        <div className='description'>
                            <p>Èquipement</p>
                            <img className='descriptionimg' src={arrowup} alt="" />
                        </div>
                        <p className='descriptionp'>{Mypackage[currentIndex].equipments.map((equipment, index) => (
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