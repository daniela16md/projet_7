import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Bannerapropos from '../components/Bannerapropos/Bannerapropos'
import Dropdownopen from '../components/Dropdownpen/Dropdownopen'

function Apropos() {
  return (
    <div className='pagecontent'>
      <div className=' pagediv'>
        <Header/>
        <Bannerapropos/>
        <Dropdownopen/>
      </div>
      <Footer/>
    </div>
  )
}

export default Apropos