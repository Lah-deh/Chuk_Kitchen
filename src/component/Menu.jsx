import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import bg from '../assets/Sign in.png'
import { Link } from 'react-router'

const Menu = () => {
  return (
    <div>
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
            <div className='absolute top-1/2 pl-5 text-white '>
            <h1 className='text-white text-[30px] font-semibold tracking-wide'>
                Chuks Kitchen
            </h1>
            <p className='text-[16px] font-semi-medium mt-3 '>
                Chuks  Kitchen Nigerian Home Cooking4.8  (1.2k)
            </p>
            
            </div>
      </div> 
      <div className=" bg-white rounded-lg overflow-hidden">
  
            <h3 className="px-4 py-4 font-bold border text-[24px]">
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
