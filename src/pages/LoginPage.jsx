import React from 'react'
import Login from '../component/Login'  
import Footer from '../component/Footer'

const LoginPage = () => {
  return (
    <div>
      <Login/>
      <div className='hidden sm:block'>
        <Footer />
      </div>
    </div>
  )
}

export default LoginPage
