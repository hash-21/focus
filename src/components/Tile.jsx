import React from 'react'

const Tile = () => {
  return (
    <div className='  w-full flex flex-col md:flex-row justify-center p-2'>
    <div className=' flex flex-col p-8 '>
    <h1 className=' text-6xl md:text-9xl font-semibold mb-6'>Forward<br/>-Thinking </h1>

        <p className=' md:w-1/2 text-xl tracking-tight mb-4 mx-12'>With a world-class team of over 25 experts working remotely across different time zones, Focus built a human-focused approach to all aspects of the agency.</p>

            <ul className=' text-lg md:text-2xl tracking-tight list-disc mx-16 md:mx-24' >
                <li>Creative Strategy</li>
                <li>Branding & Art Direction</li>
                <li>Web Design</li>
                <li>Webflow Development</li>
                <li>2D/3D Animations</li>
                <li>Creative Development (WebGL, GSAP)</li>
                <li>AI Strategy & Integration</li>
            </ul>
    </div>
    <div className='flex flex-col px-2'>
    <video className=' rounded-2xl ' muted autoPlay loop>
            <source src="videos/people.webm" type="video/webm" />
        </video>
    </div>
       
    

    </div>
  )
}

export default Tile