import React from 'react'
import Register from '../component/Register'
import Footer from '../component/Footer'

const Create = () => {
  return (
    <div>
      <Register />
      <div className='hidden sm:block'>
        <Footer/>
      </div>
    </div>
  )
}

export default Create
