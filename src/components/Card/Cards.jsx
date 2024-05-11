import React from 'react'
import Card from './Card'

function Cards({mainText,paraText,nextText,secondText,headText}) {
  return (
    <div className='w-[90%] mx-auto md:mx-0 md:w-full'>
        <div className=' max-w-screen-xl mx-auto py-20 flex flex-col-reverse md:flex-row gap-2'>
            <Card width={"basis-1/3"} start={false} para={true}  mainText={mainText} paraText={paraText} nextText={nextText} />
            <Card width={"basis-2/3"}  start={true} para={false} hover="true" mainText={secondText}  nextText={headText}/>
        </div>
    </div>
  )
}

export default Cards
