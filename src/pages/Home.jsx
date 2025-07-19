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
import monkey from '/Home/monkey.jpeg'
import { FaArrowRight } from "react-icons/fa";
import { div } from 'framer-motion/client';
import FeaturesCard from '../components/FeaturesCard';
import Footer from '../components/Footer'
import { Link } from 'react-router'
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



      const containerVariants1 = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    
      const itemVariants1 = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50 } },
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
<img className='w-8 h-8 mt-1 lg:mt-3 ml-2 ' src={Union} alt="" />

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

<div className="bg-[#F5F5DD]  py-6">

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
          link={"/games"}
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
            link={"/cognitive-skills"}
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
                  link={'/education'}

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
          link={'/brain'}
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
          link={'/creativity-boosters'}
          para={
          "Let your imagination soar! Draw, color, and compose music on our digital canvas. With tools for artistic expression and musical exploration, your creativity will find endless ways to shine."
          }
        />
      </motion.div>

  
    </motion.div>


</div>



{/* Why Us */}
{/* below hero 2 */}
<div id='about' className='bg-beige'>
<div className="flex lg:flex-row flex-col px-4 py-12   lg:px-8">

{/* right */}
<div className='w-full lg:w-1/2 px-1 lg:px-0 '>
<img

 // Smooth animation
className='h-[540px]  object-contain w-full'  src={monkey} alt="" />


</div>
    {/* left */}
    <div className='w-full lg:w-1/2 '>
<div className='p-8 lg:bg-gradient-to-l bg-gradient-to-b flex flex-col from-primary-black/20 via-gray-200 to-white     h-full'>
<div  className='flex flex-col gap-2  h-full '>
    <div>

<h1 className='text-4xl font-atma text-[#F82377]  font-semibold'>WHY CHOOSE US?</h1>

    </div>

    <div className="flex flex-col justify-between h-full">
      <motion.div
        className="space-y-4"
        variants={containerVariants1}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Item 1 */}
        <motion.div
          className="px-2"
          variants={itemVariants1}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <h1 className="text-2xl text-[#826cf6]">Engaging Content</h1>
          <div className="text-sm flex justify-center px-4 font-atma gap-2 mt-2">
            <FaArrowRight className="mb-1" size={15} />
            <p className="text-xs">
              We offer a variety of interactive games and educational resources that make learning exciting.
            </p>
          </div>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          className="px-2"
          variants={itemVariants1}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <h1 className="text-2xl text-[#826cf6]">Skill Development</h1>
          <div className="text-xs flex justify-center px-4 font-atma gap-2 mt-2">
            <FaArrowRight className="mb-1" size={15} />
            <p>Our platform helps enhance cognitive skills like problem-solving, memory, and critical thinking.</p>
          </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div
          className="px-2"
          variants={itemVariants1}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <h1 className="text-2xl text-[#826cf6]">Fun Learning Experience</h1>
          <div className="text-xs flex justify-center px-4 font-atma gap-2 mt-2">
            <FaArrowRight className="mb-1" size={15} />
            <p>Learning is never boring with our creative and immersive activities designed for kids.</p>
          </div>
        </motion.div>

        {/* Item 4 */}
        <motion.div
          className="px-2"
          variants={itemVariants1}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <h1 className="text-2xl text-[#826cf6]">Comprehensive Approach</h1>
          <div className="text-xs flex justify-center px-4 font-atma gap-2 mt-2">
            <FaArrowRight className="mb-1" size={15} />
            <p>
              We cover multiple subjects including science, history, languages, and more to ensure a holistic
              education.
            </p>
          </div>
        </motion.div>

        {/* Item 5 */}
        <motion.div
          className="px-2"
          variants={itemVariants1}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <h1 className="text-2xl text-[#826cf6]">Brain Growth Focused</h1>
          <div className="text-xs flex justify-center px-4 font-atma gap-2 mt-2">
            <FaArrowRight className="mb-1" size={15} />
            <p>Our games and tasks are designed to boost brain function, improving focus, memory, and mental agility.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>

</div>


</div>


</div>

</div>


</div>


{/* contact us */}
<div id="contact">
<div className='h-full w-full font-atma bg-beige'>
    <div className='bg-contact bg-cover h-[600px] bg-no-repeat'>

<div className='flex flex-col py-12'>
    <div><h1 className='text-[#F39C12] text-center'>Get in touch</h1></div>
<div>
<h1 className='text-center text-4xl font-semibold text-[#550964]'>Needs Help? Let’s Get in Touch</h1>

</div>

<div className='flex w-full h-48 justify-center items-center'>
  <a
  href="mailto:alishbaJavaid@gmail.com"
  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 px-16 rounded-full text-xl shadow-lg transition duration-300 inline-block text-center"
>
  📧 Contact Us
</a>
</div>


{/* <div >
<div className='flex  mt-12 justify-center items-center w-[60%] mx-auto    border-red-500 gap-4'>
    <div className="w-1/2">
    <input className='w-full px-2 focus:ring-2 focus:ring-blue-500 py-4 rounded-md' type="text" placeholder="Your Name" />
    </div>
    <div className="w-1/2">
    <input className='w-full px-2 focus:ring-2 focus:ring-blue-500 py-4 rounded-md' type="text" placeholder="Your Email" />
    </div>

</div>
<div className='flex  mt-4 justify-center items-center w-[60%] mx-auto    border-red-500 gap-4'>
    <div className="w-full">
    <input className='w-full px-2 focus:ring-2 focus:ring-blue-500 py-4 rounded-md' type="text" placeholder="Subject" />
    </div>
  

</div>
<div className='flex  mt-4 justify-center items-center w-[60%] mx-auto    border-red-500 gap-4'>
    <div className="w-full">
 <textarea className='w-full px-2 h-52 py-4 border  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black resize-none' placeholder='Message' cols="90" name="Your Message" id=""></textarea>
    </div>
  

</div>


</div> */}


</div>




    </div>







</div>





</div>

{/* footer */}
<div>
<Footer/>
</div>

    </div>

 
  )
}
