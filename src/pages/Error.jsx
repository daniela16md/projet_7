import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Error4 from '../components/404/404'

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