import React from 'react'
import Stars from '../Stars/Stars'
import Collapse from '../Collapse/Collapse'
import './Logementsinfos.css'

function Logementsinfos({logement}) {
  return (      
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

            <section className="descriptionequipement">

                <div className='dropdownopendiv'>
                    {[
                        { title: "Description", content: logement.description },
                        { 
                            title: "Equipement", 
                            content: logement.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)
                        }].map((section, index) => (
                        <Collapse key={index} title={section.title}>
                            {typeof section.content === 'string' ? 
                                <p className='description-content '>{section.content}</p> : 
                                <ul className='description-content'>{section.content}</ul>
                            }
                        </Collapse>
                    ))}
                </div>
                
            </section>
                
        </section>

    )
}

export default Logementsinfos