import React from 'react';
import './Carrousel.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useState } from 'react';


function Carrousel({logement}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const LeftClick = () => {
        setCurrentIndex(currentIndex === 0 ? logement.pictures.length - 1 : currentIndex - 1);
    };
    const RightClick = () => {
        setCurrentIndex(currentIndex === logement.pictures.length - 1 ? 0 : currentIndex + 1);
    };
 
    return (
        <section className='bannerSlider'>
            <img 
                className='bannerSliderImg' 
                src={logement.pictures[currentIndex]} 
                alt={logement.pictures[currentIndex].title} 
            />
            {logement.pictures.length > 1 && ( 
                <> 
                    <div className='bannerSliderArrow'>
                        <MdOutlineArrowBackIosNew className='slideArrow arrowLeft' onClick={LeftClick} />
                        <MdOutlineArrowBackIosNew className='slideArrow arrowRight' onClick={RightClick} />
                    </div>
                
                    <p className='bannerCount'>{currentIndex + 1} / {logement.pictures.length}</p>
                </>
            )}
        </section>
    )
    
}

export default Carrousel