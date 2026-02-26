import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import bg from '../assets/Sign in.png'
import { Link } from 'react-router'
import Header from'./Header'
import Welcome from '../assets/Welcome.png'

const Menu = () => {
  return (
    <div>
      <Header/>
        <div>
            <div
                className="h-screen bg-cover bg-center relative sm:hidden " 
                style={{ backgroundImage: `url(${bg})` }}
                >
            </div>
            <div
                className="h-screen bg-cover bg-center relative hidden sm:block" 
                style={{ backgroundImage: `url(${Welcome})` }}
                >
            </div>
            
            <div className='absolute top-1/2 pl-5 text-white '>
            <h1 className='text-white text-[30px] font-semibold tracking-wide'>
                Chuks Kitchen
            </h1>
            <p className='text-[16px] font-semi-medium mt-3 '>
                Chuks  Kitchen Nigerian Home Cooking4.8  (1.2k)
            </p>
            
            </div>
      </div> 
      <div className=" bg-white rounded-lg overflow-hidden sm:mx-6 my-7 ">
  
            <h3 className="px-4 py-4 font-bold  text-[24px]">
                Menu Categories
            </h3>

            <div className="flex flex-col">

                <div className="w-full bg-[#F4D7B5] border-l-4 border-[#FF7A18] px-4 py-3 ">
                Popular
                </div>

                <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors">
                Jollof Rice & Entrees
                </div>

                <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors">
                Swallow & Soups
                </div>

                <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors">
                Grills & sides
                </div>

                <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors">
                Beverages
                </div>

                <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors">
                Desserts
                </div>

            </div>
       </div>
      
    </div>
  )
}

export default Menu
