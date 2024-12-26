import React from 'react'
import { Link } from 'react-router'

const FeaturesCard = ({icon,heading,para,link}) => {
  return (
    <Link to={`${link}`}>

<div className='bg-[#B887C1]/60 shadow-xl shadow-[#710A85] flex flex-col justify-center items-center border-black border-2 rounded-xl group hover:bg-[#550964] transition-all duration-200  max-w-72 mt-12 cursor-pointer   p-6 h-64'>
<div ><img className='w-12 mx-auto my-2' src={icon} alt="" srcset="" />
<div>
    <h1 className='text-xl text-center font-atma group-hover:text-white font-bold text-[#710A85]' >{heading}</h1>
</div>
<div>
    <p className='text-[#710A85]  group-hover:text-white text-sm'>{para}</p>
</div>

</div>

</div>




    </Link>
  )
}

export default FeaturesCard