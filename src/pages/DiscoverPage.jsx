import React from 'react'
import Discover from '../component/Discover'
import Categories from '../component/Categories'
import Footer from '../component/Footer'

const DiscoverPage = () => {
  return (
    <div>
      <Discover />
      <Categories />
        <div className='hidden sm:block'>
            <Footer />
        </div>   
    </div>
  )
}

export default DiscoverPage
