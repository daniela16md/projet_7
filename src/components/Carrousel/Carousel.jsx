import React from 'react';
import './Carrousel.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useState, useEffect } from 'react';
import Loader from '../../components/Laoder/Loader';

function Carrousel({logement}) {

    const [loading, setLoading] = useState(true)
    useEffect(()=> {

    setTimeout(() => {
      setLoading(false)
    }, 3000);

  }, [])
       
    const [currentIndex, setCurrentIndex] = useState(0);

    const LeftClick = () => {
        setCurrentIndex(currentIndex === 0 ? logement.pictures.length - 1 : currentIndex - 1);
    };

    const RightClick = () => {
        setCurrentIndex(currentIndex === logement.pictures.length - 1 ? 0 : currentIndex + 1);
    };

   
  
    return (
        loading ? (
            <Loader/>
          ) : (
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
        )
    
            
    );
}


export default Carrousel