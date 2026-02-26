import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose } from "react-icons/io5"
import { Link } from 'react-router'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Explore', path: '/discover' },
  { name: 'My Orders', path: '/menu' },
  { name: 'Account', path: '/account' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className='flex justify-between items-center p-3 sm:px-10'>
        <h1 className='chuks'>Chuks Kitchen</h1>

        
        <nav className='hidden sm:flex gap-8 items-center'>
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className='text-[14px] text-[#1F2937] hover:text-[#FF7A18] transition-colors'>
              {link.name}
            </Link>
          ))}
          <Link to='/login'>
            <button className='bg-[#FF7A18] text-white px-6 py-2 rounded-lg text-[14px]'>
              Login
            </button>
          </Link>
        </nav>

        
        <RxHamburgerMenu
          className='text-[24px] text-[#1F2937] sm:hidden cursor-pointer'
          onClick={() => setMenuOpen(true)}
        />
      </div>

      
      <div className={`fixed top-0 right-0 h-full w-3/4 bg-white z-50 shadow-xl transform transition-transform duration-300 sm:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-end p-4'>
          <IoClose className='text-[28px] cursor-pointer' onClick={() => setMenuOpen(false)} />
        </div>
        <nav className='flex flex-col gap-6 px-8 mt-4'>
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className='text-[18px] text-[#1F2937] font-medium border-b border-gray-100 pb-4'
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to='/login' onClick={() => setMenuOpen(false)}>
            <button className='bg-[#FF7A18] text-white px-6 py-3 rounded-lg text-[16px] w-full mt-4'>
              Login
            </button>
          </Link>
        </nav>
      </div>

    
      {menuOpen && (
        <div
          className='fixed inset-0 bg-black/40 z-40 sm:hidden'
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Header