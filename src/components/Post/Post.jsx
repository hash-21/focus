import React from 'react'
import Button from '../Button'

const Post = ({post}) => {


  return (
    <div className={`${post.tileColor} flex flex-col  md:flex-row rounded-3xl h-[72vh] md:h-screen p-6  m-10 md:m-16 `}>
        
         
        <div className='  flex flex-col justify-around items-end  '>
        <img className='w-32 md:w-24 self-start' src={post.logoSrc} alt="Logo" />
         <img className=' hidden md:inline-block w-[23vw] rounded-xl ' src={post.firstImg} alt="" />
         <img className='w-[80vw] rounded-xl mt-10 md:mt-0' src={post.secondImg} alt="" />
            </div>
        <div className='   flex flex-col justify-evenly items-center  '>
        
        <video className='  hidden md:inline-block rounded-3xl w-[90%]' muted  loop autoPlay  >
            <source src={`${post.videoSrc}`} type="video/webm" />
        </video>
       <div className='relative left-3 md:left-12'>
       <p className=' py-4 w-[85%]'>{post.description}</p>
        <Button title="Visit Website" />
       </div>
        </div>
     
    </div>
  )
}

export default Post