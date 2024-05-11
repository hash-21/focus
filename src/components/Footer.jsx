import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-16 md:gap-32'>
            <div className=' basis-1/3 md:basis-1/2'>
                <h1 className=' text-5xl md:text-[11.5rem] font-semibold leading-none tracking-tight'>
                focus.</h1>
            </div>
            <div className=' basis-2/3 md:basis-1/2 flex  gap-6 md:gap-4'>
                <div className='basis-1/3'>
                    <h4 className='mb-10 capitalize text-zinc-500'>socials</h4>
                    {["Instagram","Twitter (x?)",  " LinkedIn"].map((item,index)=><a  key={index} className='block mt-2 capitalize text-zinc-600'>{item}</a>)}
                 
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-10 capitalize text-zinc-500'>Sitemap</h4>
                    {["home","work","careers", "contact"].map((item,index)=><a  key={index} className='block mt-2 capitalize text-md text-zinc-500'>{item}</a>)}
                 
                </div>
                <div className='  basis-1/2 hidden md:flex md:flex-col  md:items-end'>
                    <p className=' text-left md:text-right'>focus is a digital agency driven by design and expowered by technology</p>
                    <img src="https://th.bing.com/th/id/OIG4.90.0p_249RCiXcklvHB6?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="" className=' size-14 md:size-24 w-24 md:w-32 mt-10' />
                </div>
        </div>
    </div>
    </div>
  )
}

export default Footer