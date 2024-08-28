import React from 'react'
import Cercle from '../assets/icons/round.png'
import stars from '../assets/icons/start-grey.png'
import star from '../assets/icons/start_red.png'
import '../style/Logementtinfos.css'
import arrowup from '../assets/icons/arrow_uppng.png'





function Logementinfos() {
   
  return (
    <div className='logementinfos'>
        <div className='titlediv'>
            <div className='tittleh2p'>
                <h2 className='titleh2'>My title </h2>
                <p className='tittlep'>Paris, Ile de France</p>
            </div>
            
            <div className='asideround'>
               <p className='asideroundp'>Alexandre <span className='span'>Dumas</span> </p>
                <img src={Cercle} alt="" />
            </div>
        </div>
        <div className='infos'>
            <div className='infosdatas'>
                <p className='data'>Cozy</p>
                <p className='data'>Canal</p>
                <p className='data'>Paris 10</p>
            </div>
            <div className='asidestars'>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
            </div>
            
        </div>
        <div className='descriptionequipement'>
            <div className='descdiv'>
                <div className='description'>
                    <p>Description</p>
                    <img className='descriptionimg' src={arrowup} alt="" />
                </div>
                <p className='descriptionp'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero deleniti aliquid incidunt nulla, voluptates omnis accusantium necessitatibus enim ratione sint impedit delectus, ducimus sapiente nostrum dolore blanditiis porro. Quisquam, placeat.</p>
            </div>
           
            <div className='descdiv'>
                <div className='description'>
                    <p>Description</p>
                    <img className='descriptionimg' src={arrowup} alt="" />
                </div>
                <p className='descriptionp'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero deleniti aliquid incidunt nulla, voluptates omnis accusantium necessitatibus enim ratione sint impedit delectus, ducimus sapiente nostrum dolore blanditiis porro. Quisquam, placeat.</p>
            </div>
        </div>

    </div>
  )
}

export default Logementinfos