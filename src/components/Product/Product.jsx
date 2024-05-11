import React from 'react'
import Button from '../Button'
function Product({val,mover,count}) {
  return (
    
    <div className={` w-full py-20 h-[23rem] text-white hover:border-y-2 border-cyan-500`}>
     <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 className=' text-4xl md:text-6xl capitalize font-medium'>{val.title}</h1>
        <div className='dets w-1/2 md:w-1/3'>
          <p className='mb-10'>{val.description}</p>
          <div className='flex  flex-col md:flex-row justify-start  md:items-center gap-5'>
          {val.live && <Button />}
          {val.case && <Button title='Case Study'/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product