import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import bg from '../assets/Sign in.png'
import { Link } from 'react-router'
import Header from'./Header'
import Welcome from '../assets/Welcome.png'



const Discover = () => {
  return (
    <div  className=''>
      <Header/>
      <div>
        <div
            className="h-screen bg-cover bg-center relative sm:hidden " 
            style={{ backgroundImage: `url(${bg})` }}
            >
        </div>
        <div
            className="h-screen bg-cover bg-center relative hidden sm:block " 
            style={{ backgroundImage: `url(${Welcome})` }}
            >
        </div>
        <div className='absolute top-1/3 pl-5 text-white  sm:top-1/2 sm:pl-20'>
        <h1 className='text-white text-[30px] font-semibold tracking-wide'>
            The Heart of Nigerian Home Cooking
        </h1>
        <p className='text-[16px] font-semi-medium mt-3 '>
            Handcrafted with passion, delivered with care.
        </p>
        <button className='font-primary text-white bg-[#FF7A18] rounded-lg py-3 px-6  mt-6 text-[13px] '>
                <Link to='/menu'>Discover what's new</Link>
        </button>
        </div>
      </div> 
    </div>
  )
}

export default Discover
