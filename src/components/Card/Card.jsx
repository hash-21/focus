import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import {motion}  from "framer-motion"


function Card({width,start,para,hover="false",paraText,mainText,nextText}) {

  return (
    <motion.div whileHover={{backgroundColor: hover==="true" &&"#7443ff",padding:"25px"}} className={`bg-zinc-800 p-5 rounded-xl  ${width} min-h-[30rem] flex flex-col justify-between `}>
       <div className='w-full '>
       <div className='w-full flex justify-between items-center'>
            <h3>{nextText}</h3>
            <IoIosArrowRoundForward/>
        </div>
        <h1 className='text-3xl font-medium mt-5'>{mainText}</h1>
    </div>
    <div className='down w-full '>
      {
        start=== true && ( 
        <> 
          <h1 className='text-6xl font-semibold tracking-tight leading-none capitalize'>start a project</h1>
        <button className='rounded-full mt-5 py-3 px-5 border-[1px] border-zinc-500'>Contact Us</button>
        </> 
        )
      }

      {para && (
                <p className='text-sm text-zinc-500 font-medium'>{paraText}</p>

      )}

    </div>
       </motion.div>
  )
}

export default Card
