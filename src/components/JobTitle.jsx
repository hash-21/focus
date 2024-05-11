import React from 'react'
import Button from './Button'

const JobTitle = ({val}) => {
    return (
    
        <div className={` w-full py-8 h-[24rem] md:h-[16rem] px-0 md:px-24  text-black mb-8  md:mb-0 `}>
          <div className='  mx-auto p-20 flex flex-col md:flex-row  border-b-[1px] border-zinc-700 justify-between '>
          <h1 className='  w-[38%]  text-4xl  md:text-6xl capitalize font-medium '>{val.title}</h1>
             <div className='  flex flex-col py-4  md:py-0'>
             <p className='text-black font-semibold '>{val.description}</p>
             <p className='text-zinc-500'>Remote - EU or USA (pref EST)</p>
            </div>
             <div>
             <Button title='Open' btnColor="bg-black" btnText="text-white"/>
             </div>
          </div>
          </div>
      )
    }


export default JobTitle