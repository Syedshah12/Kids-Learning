import React from 'react'
import { Navbar } from '../components/Navbar'
import Union from '/Home/Union.png'
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className='flex flex-col h-screen'>
<Navbar/>
{/* hero section */}
<div className='bg-custom-bg2 bg-cover bg-center bg-no-repeat   flex-1'>

<div className='flex flex-col justify-center gap-8  px-2 lg:py-12 lg:px-4 w-full lg:w-[70%] h-full '> 

<div>
    <h1 className='lg:text-5xl text-4xl lg:text-start    px-12 lg:px-0 text-[#111624] font-bold'><span className='text-[#FE602F] flex'>Welcome
<img className='w-8 h-8 mt-3 ml-2' src={Union} alt="" />

    </span>
    
    </h1>
</div>

<div
   

className=' font-semibold font-mulish mx-auto lg:mx-0 w-[80%]'>
    <motion.p
       initial={{ x: "-100vw" }}
       animate={{ x: "0" }}
       transition={{ duration: 1, ease: "easeInOut" }}
    
    className='text-lg text-[#111624]/90 font-atma'>Discover a world of fun and learning, where every click sparks creativity, every game sharpens your mind, and every story takes you on an adventure.Unleash your imagination, solve exciting challenges, and watch your skills grow every day. The journey of learning has never been this exciting!</motion.p>

</div>

{/* <div className=' flex justify-center lg:justify-start'>
<button


                className='bg-[#FE602F] rounded-sm  px-12 lg:px-6 py-2 text-white  font-bold cursor-pointer hover:bg-[#FE602F]/90 transition-all duration-300
                hover:scale-110 mt-2 animate-bounce hover:animate-none
                '

                >
          SIGN UP
              </button>
</div> */}

</div>




</div>

    </div>
  )
}
