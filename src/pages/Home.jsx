import React from 'react'
import Hero from '../component/Hero'  
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className='px-5 sm:px-0' >
      <Hero/>
      <div className='hidden sm:block'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
