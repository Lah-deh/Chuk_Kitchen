import React from 'react'
import { MdMail } from "react-icons/md"
import { IoMdLock } from "react-icons/io";

import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const Login = () => {
  return (
    <div>
      <div>
        <h1 className='chuk'>Chuks Kitchen</h1>
        <h2 className='text-[24px] font-[650] text-center'>Login your Account</h2>
      </div>
      <div className='mt-4'>
        <form>
          <label htmlFor='email' className='text-[16px] font-normal text-[#1F2937] '>Email or Phone number</label>
          <div className='relative mt-2 mb-4'>
            <MdMail className='absolute left-3 top-1/2 -translate-y-1/2 text-[#BDBDBD] text-[20px]' />
            <input 
              type='text' 
              id='email' 
              className='w-full border-[#BDBDBD] border-2 rounded-lg py-3 px-4 pl-10' 
              placeholder='name@gmail.com' 
            />
          </div>

          <label htmlFor='password' className='text-[16px] font-normal text-[#1F2937]'>Password</label>
          <div className='relative mt-2 mb-4 '>
            <IoMdLock className='absolute left-3 top-1/2 -translate-y-1/2 text-[#BDBDBD] text-[20px]' />  
            <input 
            type='password' 
            id='password' 
            className='w-full border-[#BDBDBD] border-2 rounded-lg py-3 px-8 ' 
            placeholder='*******' 
          />  
          </div>
          <p className='text-[#1E88E5] text-[12px] font-normal text-end'>
            Forgot Password?
          </p>
          <button className='text-white bg-[#FF7A18] w-full py-3.5 mt-5 rounded-xl'>
            Continue
          </button>
          <p className=' text-[#1F2937] text-[12px] font-normal mt-3 text-center'>
            or continue with
          </p>
          <div>
            <button className='flex items-center justify-center gap-3 mt-3 mb-4 w-full border-2 border-[#BDBDBD] rounded-lg py-3'>
                <FcGoogle className='text-[20px]' />
                <span>Continue with Google</span>
            </button>
            <button className='flex items-center justify-center gap-3 mt-3 mb-4 w-full border-2 border-[#BDBDBD] rounded-lg py-3'>
                <SiFacebook className='text-[20px] text-[#1E88E5]' />
                <span>Continue with Facebook</span>
            </button>
          </div>
          <p className='text-[#1F2937] text-[12px] font-normal mt-3 text-center mb-10'>
            Dont have an account? <span className='text-[#1E88E5]'>Create an account</span>
          </p>
          
        </form>
      </div>
    </div>
  )
}

export default Login