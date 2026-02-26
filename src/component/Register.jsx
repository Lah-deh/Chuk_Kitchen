import React from 'react'
import { MdMail } from "react-icons/md"
import { IoMdLock } from "react-icons/io";
import { Link } from 'react-router';  
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { MdCall } from "react-icons/md";
import Sign from '../assets/Sign up.png'

const Register = () => {
  return (
    <div className='sm:flex'>
        <div
            className="min-h-screen bg-cover bg-center relative  hidden sm:block w-1/2 ml-0"
            style={{ backgroundImage: `url(${Sign})` }}
            >
        </div>
        <div className='page flex-1'>
            <div>
                <h1 className='chuk'>Chuks Kitchen</h1>
                <h2 className='text-[24px] font-medium text-center'>Create your Account</h2>
            </div>
            <div className='mt-4'>
                <form>
                    <label htmlFor='email' className='text-[16px] font-normal text-[#1F2937] '>Email</label>
                    <div className='relative mt-2 mb-4'>
                        <MdMail className='absolute left-3 top-1/2 -translate-y-1/2 text-[#BDBDBD] text-[20px]' />
                        <input 
                            type='email' 
                            id='email' 
                            className='w-full border-[#BDBDBD] border-2 rounded-lg py-3 px-4 pl-10 hover:border-[#1E88E5] focus:outline-none focus:border-[#1E88E5]' 
                            placeholder='name@gmail.com' 
                        />
                    </div>
                    <label htmlFor='phone' className='text-[16px] font-normal text-[#1F2937] '>Phone number</label>
                    <div className='relative mt-2 mb-4'>
                        <MdCall className='absolute left-3 top-1/2 -translate-y-1/2 text-[#BDBDBD] text-[20px]' />
                        <input 
                            type='number' 
                            id='phone' 
                            className='w-full border-[#BDBDBD] border-2 rounded-lg py-3 px-4 pl-10 hover:border-[#1E88E5] focus:outline-none focus:border-[#1E88E5]' 
                            placeholder='8144316917' 
                        />
                    </div>
                    <label htmlFor='password' className='text-[16px] font-normal text-[#1F2937]'>Password</label>
                    <div className='relative mt-2 mb-4 '>
                        <IoMdLock className='absolute left-3 top-1/2 -translate-y-1/2 text-[#BDBDBD] text-[20px]' />  
                        <input 
                            type='password' 
                            id='password' 
                            className='w-full border-[#BDBDBD] border-2 rounded-lg py-3 px-8 hover:border-[#1E88E5] focus:outline-none focus:border-[#1E88E5]' 
                            placeholder='*******' 
                        />  
                    </div>
                    <label htmlFor='confirmPassword' className='text-[16px] font-normal text-[#1F2937]'>Confirm Password</label>
                    <div className='relative mt-2 mb-4 '>
                        <IoMdLock className='absolute left-3 top-1/2 -translate-y-1/2 text-[#BDBDBD] text-[20px]' />  
                        <input 
                            type='password' 
                            id='confirmPassword' 
                            className='w-full border-[#BDBDBD] border-2 rounded-lg py-3 px-8 hover:border-[#1E88E5] focus:outline-none focus:border-[#1E88E5]' 
                            placeholder='*******' 
                        />  
                    </div>
                    <label className='text-[14px] font-light'>
                        <input type="checkbox" className='accent-[#1E88E5]' />
                        I agree to the <span className='text-[#1E88E5]'>Terms of Service</span> and <span className='text-[#1E88E5]'>Privacy Policy</span>
                    </label>

                <button className='text-white bg-[#FF7A18] w-full py-3.5 mt-5 rounded-xl'>
                    <Link to='/discover'>Continue</Link>
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
                        Already have an account? 
                        <span className='text-[#1E88E5]'>
                        <Link to="/login">Sign in </Link>
                        </span>
                </p>
                </form>
            </div>
            </div>
    </div>
  )
}

export default Register
