import React from 'react'
import F1 from '../assets/Popular Categories.png'
import F2 from '../assets/F 2.png'
import F3 from '../assets/F 3.png'  
import Food from '../assets/Rectangle 13.png'
import Tilapia from '../assets/Image.png'
import Advert from '../assets/Advert.png'

import { Link } from 'react-router'

const Categories = () => {
  return (
    <div>
      <div>
        <h2 className='text-center font-semibold text-[24px] mt-4'>
            Popular Categories
        </h2>
        <div className='mx-4 mt-3'>
            <img src={F1} alt='F1' className='w-full mt-4 rounded-lg'/>
            <img src={F2} alt='F2' className='w-full mt-4 rounded-lg'/>
            <img src={F3} alt='F3' className='w-full mt-4 rounded-lg'/>
            <p className='text-[#1E88E5] text-[16px] font-semi-medium mt-5 text-center mb-17'>
                <Link to='/menu'>View All Categories</Link>
            </p>
        </div>
      </div>
      <div>
            <h2 className='text-center text-[30px] font-medium'>
                Chef's Specials
            </h2>
            <div className="bg-white border-2 border-white rounded-xl shadow-lg overflow-hidden mx-4 mt-7">
                <img src={Food} alt="food" className="w-full rounded-t-xl" />

                <div className="p-4">
                    <h3 className="font-semibold text-lg">
                    Jollof Rice & Fried Chicken
                    </h3>

                    <p className="text-gray-600 text-sm mt-2">
                    Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.
                    </p>

                    <div className="flex justify-between items-center mt-4">
                    <span className="text-[#FF7A18] font-semibold">
                        ₦3,500
                    </span>

                    <button className="bg-[#FF7A18] text-white px-4 py-2 rounded-lg" onClick={() => window.location.href='/menu'}>
                        Add to cart
                    </button>
                    </div>
                </div>
            </div>
            <div className="bg-white border-2 border-white rounded-xl shadow-lg overflow-hidden mx-4 mt-7">
                <img src={Tilapia} alt="Tilapia" className="w-full rounded-t-xl" />

                <div className="p-4">
                    <h3 className="font-semibold text-lg">
                    Spicy Tilapia Pepper Soup
                    </h3>

                    <p className="text-gray-600 text-sm mt-2">
                    A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.
                    </p>

                    <div className="flex justify-between items-center mt-4">
                    <span className="text-[#FF7A18] font-semibold">
                        ₦3,500
                    </span>

                    <button className="bg-[#FF7A18] text-white px-4 py-2 rounded-lg" onClick={() => window.location.href = '/menu'}>
                        Add to cart
                    </button>
                    </div>
                </div>
            </div>
            <div className="bg-white border-2 border-white rounded-xl shadow-lg overflow-hidden mx-4 mt-7">
                <img src={Food} alt="food" className="w-full rounded-t-xl" />

                <div className="p-4">
                    <h3 className="font-semibold text-lg">
                    Jollof Rice & Fried Chicken
                    </h3>

                    <p className="text-gray-600 text-sm mt-2">
                    Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.
                    </p>

                    <div className="flex justify-between items-center mt-4">
                    <span className="text-[#FF7A18] font-semibold">
                        ₦3,500
                    </span>

                    <button className="bg-[#FF7A18] text-white px-4 py-2 rounded-lg" onClick={()=> window.location.href = '/menu'}>
                        Add to cart
                    </button>
                    </div>
                </div>
            </div>
            <p className='text-[#1E88E5] text-[16px] font-semi-medium mt-5 text-center mb-17'>
                <Link to='/menu'>View All Specials</Link>
            </p>
            <img src={Advert} alt='Advert' className='w-full ' />
       </div>
    </div>
  )
}

export default Categories
