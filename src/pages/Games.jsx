import React from 'react'
import WordSearchGame from '../components/WordSearchGame'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import { FaArrowRight } from "react-icons/fa";
import wordgame from '/games/wrodgame.jpg'
import patterngame from '/games/patterngame.jpeg'
import { Link } from 'react-router';
const Games = () => {
  return (
    <div>
<Navbar/>

<div className='bg-beige'>


<div id='About' className='bg-beige max-w-[1400px] mx-auto'>
    <div className="flex-col flex">
    <div className="flex lg:flex-row flex-col gap-24 px-4 py-4 lg:py-8  lg:px-8">


{/* right */}
{/* right */}
<div className='block lg:hidden w-full lg:w-1/2  h-1/2 overflow-hidden  px-1 lg:px-0  '>
<img

// Smooth animation
className='  object-cover  lg:max-h-[360px]'  src={wordgame} alt="" />


</div>

{/* left */}
<div className='w-full   lg:w-1/2 '>
<div className='px-4  h-full    py-4 flex flex-col         '>


<div><h1 className='text-xl text-[#F78A8F] font-bold'>Challenge Your Mind with  Word Game!</h1></div>


<div className='flex flex-col h-full  gap-8 py-6'>
<div className='font-atma text-sm '>
Dive into the exciting world of words with our engaging word game. Whether you're a vocabulary wizard or just looking for a fun way to sharpen your language skills, this game offers endless entertainment. Race against the clock, uncover hidden words, and challenge yourself to beat your high score. Perfect for players of all ages, our word game is a great way to boost your creativity and keep your brain active. Start playing today and discover the joy of wordplay!
</div>


<div className='flex justify-center lg:justify-start'><Link to={'/wordgame'} className='bg-purple-400 px-12 py-2 rounded-sm font-semibold font-atma  text-white cursor-pointer hover:bg-purple-500 transition-all duration-200'>Play Now</Link></div>
</div>



</div>



</div>


{/* right */}
<div className='hidden lg:block w-full lg:w-1/2  h-1/2 overflow-hidden  px-1 lg:px-0 '>
<img

// Smooth animation
className='  object-cover w-full lg:max-h-[360px]'  src={wordgame} alt="" />


</div>



</div>


    </div>

{/* game 2 */}
<div className="flex-col flex mt-2">
    <div className="flex lg:flex-row gap-24 flex-col px-4 py-4 lg:py-8  lg:px-8">

{/* right */}
<div className='w-full lg:w-1/2  h-1/2 overflow-hidden  px-1 lg:px-0 '>
<img

// Smooth animation
className=' max-h-[360px]  w-full object-cover object-center '  src={patterngame} alt="" />


</div>

{/* left */}
<div className='w-full   lg:w-1/2 '>
<div className='px-4  h-full    py-4 flex flex-col         '>


<div><h1 className='text-xl text-[#F78A8F] font-bold'>Master the Art of Pattern Recognition!</h1></div>


<div className='flex flex-col h-full gap-8 py-6'>
<div className='font-atma text-sm '>
Test your observation and cognitive skills with our Pattern Recognition Game! This exciting challenge requires you to identify and match patterns within a set of images, numbers, or shapes. As the difficulty increases, so does the complexity of the patterns, pushing you to think faster and more creatively. Perfect for those who enjoy brain teasers and want to enhance their problem-solving abilities, this game offers endless fun while sharpening your pattern recognition skills. Ready to spot the pattern?
</div>


<div className='flex justify-center lg:justify-start'><Link to={'#'} className='bg-purple-400 px-12 py-2 rounded-sm font-semibold font-atma  text-white cursor-pointer hover:bg-purple-500 transition-all duration-200'>Play Now</Link></div>
</div>



</div>



</div>






</div>


    </div>
</div>


</div>

<Footer/>
    </div>
  )
}

export default Games