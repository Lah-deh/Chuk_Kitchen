import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className='bg-[#5C3317] text-white'>
       <div className='mx-5 sm:mx-12 py-10'>
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-8'>
            
            
            <div className='sm:col-span-1'>
                <h2 className='chuks'>Chuks Kitchen</h2>
                <p className='text-[14px] text-[#D9C4B0] leading-relaxed'>
                Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
                </p>
            </div>

            
            <div>
                <h3 className='font-bold text-[16px] mb-4'>Quick Links</h3>
                <ul className='flex flex-col gap-2 text-[14px] text-[#D9C4B0]'>
                <li><Link to='/' className='hover:text-white transition-colors'>Home</Link></li>
                <li><Link to='/explore' className='hover:text-white transition-colors'>Explore</Link></li>
                <li><Link to='/my-order' className='hover:text-white transition-colors'>My Order</Link></li>
                <li><Link to='/account' className='hover:text-white transition-colors'>Account</Link></li>
                <li><Link to='/contact' className='hover:text-white transition-colors'>Contact</Link></li>
                </ul>
            </div>

            
            <div>
                <h3 className='font-bold text-[16px] mb-4'>Contact Us</h3>
                <ul className='flex flex-col gap-2 text-[14px] text-[#D9C4B0]'>
                <li>+234 801 234 5678</li>
                <li>hello@chukskitchen.com</li>
                <li>123 Tashe Blvd, Lagos, Nigeria</li>
                </ul>
            </div>

            
            <div>
                <ul className='flex flex-col gap-2 text-[14px] text-[#D9C4B0] mt-8 sm:mt-0'>
                <li><a href='#' className='hover:text-white transition-colors'>Facebook</a></li>
                <li><a href='#' className='hover:text-white transition-colors'>Twitter</a></li>
                <li><a href='#' className='hover:text-white transition-colors'>LinkedIn</a></li>
                <li><a href='#' className='hover:text-white transition-colors'>Instagram</a></li>
                </ul>
            </div>

            </div>

            
            <div className='border-t border-[#3B1A08] mt-8 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2'>
            <p className='text-[12px] text-[#D9C4B0]'>© 2020 Lift Media. All rights reserved.</p>
            <div className='flex gap-4 text-[12px] text-[#D9C4B0]'>
                <Link to='/privacy' className='hover:text-white transition-colors'>Privacy Policy</Link>
                <Link to='/terms' className='hover:text-white transition-colors'>Terms of Service</Link>
            </div>
            </div>

      </div>
    </footer>
  )
}

export default Footer