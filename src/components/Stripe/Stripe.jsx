import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[20%] px-2 md:px-10 py-5 bg-zinc-900 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center'>
        <img src={val.url} alt=""  className='h-6'/>
        <span className='font-semibold hidden md:inline'>{val.number}</span>
    </div>
  )
}

export default Stripe