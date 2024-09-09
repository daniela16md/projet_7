import React from 'react'
import Header from "../../components/Header/Header";
import Banner from '../../components/Banner/Banner';
import imgwater from '../../assets/images/water.webp'
import Footer from '../../components/Footer/Footer';
import Mypackage from '../../Card/mypackage.json'
import Packagecard from '../../components/Packagecard/Packagecard'
import './Cards.css'


function Home() {
  return (
    <div className='pagecontent' >
      <div className='pagediv'>
      <Header/>
      <Banner image={imgwater} text="Chez vous, partout et ailleurs" />

        <section className='cardcontent'>  
          {Mypackage.map(Mypackage => (
            <Packagecard key={Mypackage.id}
              Mypackage={Mypackage} 
              />
          ))} 
        </section>
      
      </div>
      <Footer/>
    </div>
  );
}

export default Home