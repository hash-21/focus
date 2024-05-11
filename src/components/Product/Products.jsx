import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {

    const products=[
        {
          title:"arqitel",  description:"Arqu Executive and its employees continue to receive orders for customers that get orders from customers that have completed orders", live:true,case:false

        },
        {
          title:"TTR",  description:"Arqu Executive and its employees continue to receive orders for customers that get orders from customers that have completed orders", live:true,case:false

        },
        {
          title:"YIR 2022",  description:"Arqu Executive and its employees continue to receive orders for customers that get orders from customers that have completed orders", live:true,case:true

        },
        {
          title:"Yahoo",  description:"Arqu Executive and its employees continue to receive orders for customers that get orders from customers that have completed orders", live:true,case:true

        },
    
    ]

    const [pos,setPos]=useState(0)
    const mover=(val)=>{
      setPos(val*23)
    }

  return (
    <div className='mt-32 relative'>
      {products.map((elem,index)=><Product  key={index} val={elem} mover={mover} count={index}/>)}
      <div className=' hidden md:inline-block absolute top-0 w-full h-full pointer-events-none'>
        <motion.div initial={{y:pos,x:"-50%"}} 
        animate={{y:pos+`rem`}}
        transition={{ease:[0.76, 0, 0.24, 1] ,duration:.6}}
        className='window absolute w-[32rem] h-[23rem] bg-white left-[50%] md:left-[44%] overflow-hidden'>
        <motion.div animate={{y:-pos+`rem`}}  transition={{ease:[0.76, 0, 0.24, 1],duration:.5}} className=' w-full h-full bg-sky-100 '>
          <video width="100%" height="100%" loop muted autoPlay>
        <source src="videos/showcase.mp4" type="video/mp4" />
      </video>
      </motion.div>
        <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1] ,duration:.5}} className=' w-full h-full bg-sky-300  '>
          <video width="100%" height="100%" loop muted autoPlay>
            <source src="videos/TTR.webm" type="video/webm" />
          </video>
          </motion.div>   
        <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1] ,duration:.5}} className=' w-full h-full bg-sky-500  '>
           <video width="100%" height="100%" loop muted autoPlay>
                  <source src="videos/YIR.webm" type="video/webm" />
                  </video>
          </motion.div>   
        <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1] ,duration:.5}} className=' w-full h-full bg-sky-600  '>
                <video width="100%" height="100%" loop muted autoPlay>
                <source src="videos/yahoo.webm" type="video/webm" />
                </video>
          </motion.div>   

        </motion.div>
      </div>
    </div>
  )
}

export default Products