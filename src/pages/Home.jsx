import React from 'react'
import Header from "../components/Header/Header";
import Banner from '../components/Banner/Banner';

import Footer from '../components/Footer/Footer';
import Card from '../components/Card/Card';


function Home() {
  return (
    <div className='pagecontent' >
      <div className='pagediv'>
      <Header/>
      <Banner/>
      <Card/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home