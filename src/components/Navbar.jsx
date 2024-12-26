import React from 'react'
import Logo from '/Home/Logo.svg'
import Bulb from '/Home/bulb.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
<nav className='bg-[#F5F5DD] p-4 px-8 font-mulish '>
<div className="flex justify-between items-center">
<div className="logo flex justify-center items-center ">
    <img className='w-10 mb-3 h-8' src={Bulb} alt="bulb" />
    <img className=' w-40 ' src={Logo} alt="Logo" srcset="" />
    </div>
<div className='flex gap-12'>
  <div className='hidden lg:flex gap-4 text-[#111624]'>
  <Link to={'/'} className='hover:translate-y-px transform  cursor-pointer transition-transform duration-300 hover:text-orange-400'>Home</Link>
    <div className='hover:translate-y-px transform  cursor-pointer transition-transform duration-300 hover:text-orange-400'>About</div>
    <div className='hover:translate-y-px transform  cursor-pointer transition-transform duration-300 hover:text-orange-400'>Contact</div>
  </div>
    <div className="flex gap-2 font-atma">
        <Link to={'/login'} className='text-orange-400 font-bold cursor-pointer transition-all duration-200 hover:text-orange-300'>Login</Link>
        <div className='w-[1px] bg-green-600'></div>
        <Link 
        to={'/register'}
        className='text-orange-400 font-bold cursor-pointer transition-all duration-200 hover:text-orange-300'>SignUp</Link>
    </div>
</div>

</div>




</nav>


    </div>
  )
}
