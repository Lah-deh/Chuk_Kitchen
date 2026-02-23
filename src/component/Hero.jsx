import React from 'react'
import HeroMobile from '../assets/HeroMobile.png'
import Fresh from '../assets/Fresh.png'
import { Link } from 'react-router'


const Hero = () => {
  return (
    <div>
      <div className=' mt-5'>
        <img src={HeroMobile} alt='Hero'/>
        <div className='flex justify-end'> 
            <button className='font-primary text-[#1E88E5] border-[#1E88E5] rounded-xl px-6 py-2 mt-4 border-2 text-[16px]'>
              <Link to='/login'>Sign in</Link>
            </button>
        </div>
      </div>
      <div>
        <h1 className='chuk '>
            Chuks Kitchen
        </h1>
        <h2 className='font-bold  text-[30px]'>
            Your Authentic Taste of Nigeria.
        </h2>
        <p className='text-[16px] font-normal mt-3 text-[#1F2937]'>
            Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.
        </p>
      </div>
     <div className='card mt-3'>
            <div className='flex gap-4 items-center py-1 '>
                <img src={Fresh} alt='Fresh' className='ml-2'/>
                <p className='text-[16px] font-normal  text-[#1F2937]'>Freshly prepared</p>
            </div>
     </div>
        <div className='card mt-3'>
            <div className='flex gap-4 items-center py-1 '>
                <img src={Fresh} alt='Fresh' className='ml-2'/>
                <p className='text-[16px] font-normal  text-[#1F2937]'>Freshly prepared</p>
            </div>
        </div>
        <div className='card mt-3'>
            <div className='flex gap-4 items-center py-1 '>
                <img src={Fresh} alt='Fresh' className='ml-2'/>
                <p className='text-[16px] font-normal  text-[#1F2937]'>Freshly prepared</p>
            </div>
        </div>

        <div>
            <button className='font-primary text-white bg-[#FF7A18] rounded-lg py-3 w-full mt-15 text-[16px] '>
                <Link to='/login'>Start Your Order</Link>
            </button>
            <button className='font-primary text-[#1E88E5] bg-white rounded-lg py-3 w-full mt-7 text-[16px] border-[#1E88E5] border-2 mb-15'>
                <Link to='/login'>Learn More About us </Link>
            </button>
        </div>
      
    </div>
  )
}

export default Hero
 