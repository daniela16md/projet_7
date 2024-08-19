import React from 'react'
import Header from "../components/Header";
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
import "../App.css"


function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default Home