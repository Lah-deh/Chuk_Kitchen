import React from 'react'
import Menu from '../component/Menu'
import Popular from '../component/Popular'
import Footer from '../component/Footer'

const MenuPage = () => {
  return (
    <div>
      <Menu />
        <div className='  p-4 bg-gray-50 '>
            <Popular />
        </div>
        <div className='  p-4 bg-gray-50 '>
            <Popular />
        </div>
        <div className='  p-4 bg-gray-50 '>
            <Popular />
        </div>
        <div className='hidden sm:block'>
            <Footer />
        </div>
    </div>
  )
}

export default MenuPage
