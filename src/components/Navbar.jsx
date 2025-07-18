import React from 'react'
import Logo from '/Home/Logo.svg'
import Bulb from '/Home/bulb.png'
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login flag
    navigate("/login"); // Redirect to login page
  };
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
  
<ScrollLink
  to="about"
  smooth={true}
  duration={500}
  className="hover:translate-y-px transform cursor-pointer transition-transform duration-300 hover:text-orange-400"
>
  About
</ScrollLink>

<ScrollLink
  to="contact"
  smooth={true}
  duration={500}
  className="hover:translate-y-px transform cursor-pointer transition-transform duration-300 hover:text-orange-400"
>
  Contact
</ScrollLink>
  </div>
    <div className="flex gap-2 font-atma">
         <button
      onClick={handleLogout}
      className='text-orange-400 font-bold cursor-pointer transition-all duration-200 hover:text-orange-300'
    >
      LogOut
    </button>
        <div className=''></div>
        
    </div>
</div>

</div>




</nav>


    </div>
  )
}
