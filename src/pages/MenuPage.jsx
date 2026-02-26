import React from 'react'
import Menu from '../component/Menu'
import Popular from '../component/Popular'

const MenuPage = () => {
  return (
    <div>
      <Menu />
        <div className='max-w-sm mx-auto p-4 bg-gray-50 min-h-screen'>
            <Popular />
        </div>
        <div className='max-w-sm mx-auto p-4 bg-gray-50 min-h-screen'>
            <Popular />
        </div>
        <div className='max-w-sm mx-auto p-4 bg-gray-50 min-h-screen'>
            <Popular />
        </div>
    </div>
  )
}

export default MenuPage
