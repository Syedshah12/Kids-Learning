import React from 'react'
import { Navbar } from '../components/Navbar'
import Union from '/Home/Union.png'
import games from '/Home/games.png'
import skills from '/Home/skills.png'
import brain from '/Home/brain.png'
import creativity from '/Home/creativity.png'
import education from '/Home/education.png'
import girl from '/Home/cartoon.png'
import { motion } from "framer-motion";

import { div } from 'framer-motion/client';
import FeaturesCard from '../components/FeaturesCard';

export const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 1, // Stagger the appearance of child elements
          },
        },
      };
    
      const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };


  return (
    <div>
   <div className='flex flex-col h-screen'>
<Navbar/>
{/* hero section */}
<div className='bg-custom-bg2 bg-cover bg-center bg-no-repeat   flex-1'>

<div className='flex flex-col justify-center gap-8  px-2 lg:py-12 lg:px-4 w-full lg:w-[70%] h-full '> 

<div>
    <h1 className='lg:text-5xl text-4xl lg:text-start    px-12 lg:px-0 text-[#111624] font-bold'><span className='text-[#FE602F]  flex'>Welcome
<img className='w-8 h-8 mt-3 ml-2 ' src={Union} alt="" />

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




<div className=' flex w-full overflow-x-hidden justify-center lg:justify-end'>
<img className='w-12 ' src={girl} alt="" srcset="" />
</div>

</div>




</div>






    </div>

<div className="bg-[#F5F5DD] border-2 py-6">

<div>
<h1 className='text-5xl text-[#710A85] underline text-center w-full font-bold'>Features</h1>

</div>
<motion.div
      className="flex lg:flex-row flex-col justify-center items-center lg:items-start lg:justify-around"
      variants={containerVariants} // Attach container variants
      initial="hidden" // Start with hidden state
      animate="visible" // Trigger visible state animation
    >
      {/* Interactive Games Card */}
      <motion.div
        variants={cardVariants}
        whileInView="visible" // Trigger animation when in view
        initial="hidden" // Starting state
        viewport={{ once: true }} // Animation happens only once when in view
        transition={{ duration: 0.5 }}
      >
        <FeaturesCard
          icon={games}
          heading={"Interactive Games"}
          para={
            "Make learning exciting with our collection of interactive games! From memory-matching challenges to logic puzzles and math adventures, each game is designed to sharpen skills while keeping kids entertained. Learning has never been so fun!"
          }
        />
      </motion.div>

      {/* Cognitive Skills Card */}
      <motion.div
        variants={cardVariants}
        whileInView="visible" // Trigger animation when in view
        initial="hidden" // Starting state
        viewport={{ once: true }} // Animation happens only once when in view
        transition={{ duration: 0.6 }}
      >
        <FeaturesCard
          icon={skills}
          heading={"Cognitive Skills"}
          para={
            "Boost your problem-solving and critical thinking abilities with engaging tasks and scenarios. These activities are designed to enhance focus, memory, and reasoning, laying the foundation for lifelong learning."
          }
        />
      </motion.div>

      {/* Education Card */}
      <motion.div
        variants={cardVariants}
        whileInView="visible" // Trigger animation when in view
        initial="hidden" // Starting state
        viewport={{ once: true }} // Animation happens only once when in view
        transition={{ duration: 1 }}
      >
        <FeaturesCard
          icon={education}
          heading={"Education"}
          para={
            "Unlock a world of knowledge with stories, rhymes, and fun facts! Whether it’s exploring science, history, or languages, our educational resources are crafted to make learning enjoyable and easy for kids of all ages."
          }
        />
      </motion.div>
    </motion.div>



    <motion.div
      className="flex lg:flex-row flex-col justify-center items-center lg:items-start gap-12 mt-12"
      variants={containerVariants} // Attach container variants
      initial="hidden" // Start with hidden state
      animate="visible" // Trigger visible state animation
    >
      {/* Interactive Games Card */}
      <motion.div
        variants={cardVariants}
        whileInView="visible" // Trigger animation when in view
        initial="hidden" // Starting state
        viewport={{ once: true }} // Animation happens only once when in view
        transition={{ duration: 0.5 }}
      >
        <FeaturesCard
          icon={brain}
          heading={"Brain Enhancement"}
          para={
            "Strengthen your mind with daily challenges and skill-building exercises. Track your progress and achieve milestones as you improve memory, focus, and mental agility with every session."
          }
        />
      </motion.div>

      {/* Cognitive Skills Card */}
      <motion.div
        variants={cardVariants}
        whileInView="visible" // Trigger animation when in view
        initial="hidden" // Starting state
        viewport={{ once: true }} // Animation happens only once when in view
        transition={{ duration: 0.6 }}
      >
        <FeaturesCard
          icon={creativity}
          heading={"Creativity Boosters"}
          para={
          "Let your imagination soar! Draw, color, and compose music on our digital canvas. With tools for artistic expression and musical exploration, your creativity will find endless ways to shine."
          }
        />
      </motion.div>

  
    </motion.div>


</div>

    </div>

 
  )
}
