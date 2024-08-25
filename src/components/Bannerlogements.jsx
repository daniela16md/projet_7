import React from 'react';
import '../style/style.css';
import arrowL from "../assets/icons/arrow_left.png";
import arrowR from "../assets/icons/arrow_right.png";
import Mypackage from '../mypackage.json';
import { useState } from 'react';

function Bannerlogements() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftClick = () => {
        setCurrentIndex(currentIndex === 0 ? Mypackage.length - 1 : currentIndex - 1);
    };

    const handleRightClick = () => {
        setCurrentIndex(currentIndex === Mypackage.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className='bannerSlider'>
            <img 
                className='bannerSliderImg' 
                src={Mypackage[currentIndex].url} 
                alt={Mypackage[currentIndex].title} 
            />
            <h2 className='bannerSliderTitle'>{Mypackage[currentIndex].title}</h2>
            <div className='bannerSliderControls'>
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
    );
}


export default Bannerlogements