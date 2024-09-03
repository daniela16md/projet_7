import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Error4 from '../components/404'

function Error() {
  return (
    <div className='pagecontent'>
      <Header/>
      <Error4/>
      <Footer/>
    </div>
  )
}

export default Error