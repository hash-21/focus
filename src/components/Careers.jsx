import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Product from './Product'
import JobTitle from './JobTitle'

const Careers = () => {
  const jobTitle=[
    {
      title:"operations",  description:"Senior Project Manager",

    },
    {
      title:"Design",  description:"Designer (Web & Brand)", 

    },
    {
      title:"Development",  description:"Creative Developer",

    },
    {
      title:"Growth",  description:"Content & Community Marketing",

    },

]




  return (
    <div className='bg-white text-black'> 
    <Navbar btnColor="bg-black" btnText="text-white" src="sitelogo.png"/>
    <div className='w-full mt-2'>
        <div className=" relative max-w-screen-xl mx-auto text-right ">
         <h1 className='text-[14vw] leading-none font-small select-none tracking-tight p-16 border-b-[1px] border-zinc-700  capitalize '>careers</h1>
         </div>
    </div>
    {jobTitle.map((elem,index)=><JobTitle  val={elem} />)}
   
    <Footer/>
    </div>
    
  )
}

export default Careers