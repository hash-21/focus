 import React from 'react'
 import { IoIosReturnRight } from "react-icons/io";

 function Button({title="Get Started",btnColor="bg-white",btnText="text-black"}) {
   return (
     <div className={` w-32 md:w-36 px-4 py-2 ${btnColor} ${btnText} rounded-full flex items-center justify-between`}>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight/>
     </div>
   )
 }
 
 export default Button
 