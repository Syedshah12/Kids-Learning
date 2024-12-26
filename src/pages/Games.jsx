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


<div id='About' className='bg-beige'>
    <div className="flex-col flex">
    <div className="flex lg:flex-row flex-col px-4 py-4 lg:py-8  lg:px-8">


{/* left */}
<div className='w-full lg:w-1/2 '>
<div className='p-4 lg:bg-gradient-to-l  gap-4 bg-gradient-to-b flex flex-col      h-full'>
<div><h1 className='text-xl text-[#F78A8F] font-bold'>Challenge Your Mind with Our Word Game!</h1></div>
<div className='font-atma text-sm '>
Dive into the exciting world of words with our engaging word game. Whether you're a vocabulary wizard or just looking for a fun way to sharpen your language skills, this game offers endless entertainment. Race against the clock, uncover hidden words, and challenge yourself to beat your high score. Perfect for players of all ages, our word game is a great way to boost your creativity and keep your brain active. Start playing today and discover the joy of wordplay!
</div>


</div>


</div>


{/* right */}
<div className='w-full lg:w-1/2 px-1 lg:px-0 '>
<img

// Smooth animation
className='h-full   object-contain w-full'  src={wordgame} alt="" />


</div>



</div>

<div className='w-full flex  justify-center'><Link to={'/wordgame'} className='bg-purple-400 px-12 py-2 rounded-sm font-semibold font-atma mb-8 text-white cursor-pointer hover:scale-105 transition-all duration-200'>Play Now</Link></div>
    </div>

{/* game 2 */}
<div className="flex-col flex">
    <div className="flex lg:flex-row flex-col px-4 py-4 lg:py-8  lg:px-8">
{/* right */}
<div className='w-full lg:w-1/2 px-1 lg:px-0 '>
<img

// Smooth animation
className='h-full   object-contain w-full'  src={patterngame} alt="" />


</div>

{/* left */}
<div className='w-full lg:w-1/2 '>
<div className='p-4 lg:bg-gradient-to-l  gap-4 bg-gradient-to-b flex flex-col      h-full'>
<div><h1 className='text-xl text-[#F78A8F] font-bold'>Master the Art of Pattern Recognition!</h1></div>
<div className='font-atma text-sm '>
Test your observation and cognitive skills with our Pattern Recognition Game! This exciting challenge requires you to identify and match patterns within a set of images, numbers, or shapes. As the difficulty increases, so does the complexity of the patterns, pushing you to think faster and more creatively. Perfect for those who enjoy brain teasers and want to enhance their problem-solving abilities, this game offers endless fun while sharpening your pattern recognition skills. Ready to spot the pattern?
</div>


</div>


</div>






</div>

<div className='w-full flex  justify-center'><Link to={'/wordgame'} className='bg-purple-400 px-12 py-2 rounded-sm font-semibold font-atma mb-8 text-white cursor-pointer hover:scale-105 transition-all duration-200'>Play Now</Link></div>
    </div>
</div>


</div>

<Footer/>
    </div>
  )
}

export default Games