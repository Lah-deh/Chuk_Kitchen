import React from 'react'
import F1 from '../assets/Popular Categories.png'
import F2 from '../assets/F 2.png'
import F3 from '../assets/F 3.png'  

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
                View All Categories
            </p>
        </div>
      </div>
      <div>
        <h2 className='text-center text-[30px] font-medium'>
            Chef's Specials
        </h2>
      </div>
    </div>
  )
}

export default Categories
