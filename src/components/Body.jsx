import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Work from './Work'
import Careers from './Careers'
import News from './News'

const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path: "/",
            element: <Home />,
          },
        {
            path:'/home',
            element:<Home/>,
        },
        {
            path:'/work',
            element:<Work/>,
        },
        {
            path:'/careers',
            element:<Careers/>,
        },
        {
            path:'/news',
            element:<News/>,
        },
    ])

  return (
    <div>
    

     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body