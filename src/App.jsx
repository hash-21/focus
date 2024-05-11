import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Body from './components/Body'



function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
     <div className='w-full bg-zinc-900 font-[" satoshi "] text-white '>
         <Body/>
      </div>
    
  )
}

export default App

{/* // <Provider store={appStore}>
    // </Provider>
    */}