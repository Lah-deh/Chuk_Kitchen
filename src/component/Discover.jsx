import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import bg from '../assets/Sign in.png'
import { Link } from 'react-router'



const Discover = () => {
  return (
    <div  className=''>
      <div className='flex justify-between items-center p-3'>
        <h1 className='chuks '>
            Chuks Kitchen
        </h1>
        <RxHamburgerMenu className='text-[24px] text-[#1F2937]' />
      </div>
      <div>
        <div
            className="h-screen bg-cover bg-center relative " 
            style={{ backgroundImage: `url(${bg})` }}
            >
        </div>
        <div className='absolute top-1/3 pl-5 text-white '>
        <h1 className='text-white text-[30px] font-semibold tracking-wide'>
            The Heart of Nigerian Home Cooking
        </h1>
        <p className='text-[16px] font-semi-medium mt-3 '>
            Handcrafted with passion, delivered with care.
        </p>
        <button className='font-primary text-white bg-[#FF7A18] rounded-lg py-3 px-6  mt-6 text-[13px] '>
                <Link to='/login'>Discover what's new</Link>
        </button>
        </div>
      </div> 
    </div>
  )
}

export default Discover
