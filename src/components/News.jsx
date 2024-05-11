import React from 'react'
import Navbar from './Navbar'
import Button from './Button'

const News = () => {
  return (
    <>
    <Navbar/>
 <div className='flex flex-col md:flex-row p-16 bg-zinc-900  '>
      <div className='w-9/12 md:w-4/12  flex  flex-col border-t-[1px] border-zinc-400  items-start py-6 my-2'>
      <img className=' w-[90%] rounded-xl' src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/648aee409a41d5d78bbc795c_ttr%20-%20nav.png" alt="Project Image" />
      </div>
      <div className='flex flex-col justify-evenly border-t-[1px] border-zinc-400 m-2 py-4 '>
        <h5 className='text-zinc-500  mb-3 md:mb-0'>Latest News</h5>
         <h3 className='font-semibold text-lg'>Redefining value in an AI world</h3>
         <p className='tracking-tight text-zinc-300  mb-3 md:mb-0'>AI is moving so fast, it's breaking necks. By now, no one should doubt the paradigm shifts it will cause across every industry. Along with it, we should ask ourselves, how do we define value in this new digital era?</p>
         <h6 className='border-b-[1px] text-zinc-500 pb-6'>June 8,2023</h6>

         <h3 className='font-semibold text-lg'>Jungle Case Study</h3>
         <p className='tracking-tight text-zinc-300 mb-3 md:mb-0'>We thought our timeless project for Jungle Ventures deserved a case study.</p>
         <h6 className='border-b-[1px] text-zinc-500 pb-6  mb-8 md:mb-0'>May 8,2023</h6>
         <Button  title="Show all" />


      </div>
     
    </div>  

   
    </>
   
  )
}

export default News