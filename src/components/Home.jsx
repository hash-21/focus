import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Marquees from './Marquees'
import Posts from './Posts'
import Cards from './Cards'
import Slide from './Slide'
import Tile from './Tile'

const Home = () => {

  
  const mainText="Projects & Case Studies"
  const paraText="From Brands to Websites, our work speaks for itself."
  const secondText="Lets get to it,together"


  return (
    <>
            <Navbar/>
            <div className=" w-full  h-screen mt-10  ">
              <video className='absolute w-full h-full object-cover' muted autoPlay loop>
                <source src="videos/mainVideo.mp4" type="video/mp4" />
              </video>
        <div className=" absolute  md:bg-black md:h-full md:bg-opacity-50 flex flex-col  md:flex-row justify-between items-end py-[40%]  md:py-[10%] px-[7%] ">
         <h1 className='text-[12vw] leading-none font-small select-none tracking-tight capitalize pb-16 md:pb-0 '>Unique Websites</h1>
         <p className=' text-lg md:text-normal text-semibold text-right md:w-1/3'>Focus is a new breed of digital agency that combines design, innovation, and forward-thinking to help brands create better experiences, not just more of the same old same old.</p>
         
         </div>
         </div>
      <Marquees/>
         <Posts/>
         <Slide/>
         <Tile/>
         <Cards  paraText={paraText}  mainText={mainText}  nextText="Up Next:Projects" secondText={secondText} headText="Get in Touch"/>
       

    <Footer/>
    
    </>
  
  )
}

export default Home