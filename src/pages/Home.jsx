import React from 'react'
import Header from "../components/Header";
import Banner from '../components/Banner';

import Footer from '../components/Footer';
import Card from '../components/Card';


function Home() {
  return (
    <div className='pagecontent' >
      <Header/>
      <Banner/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default Home