import React, { useState } from "react";
import Button from "./Button";
import { RiMenu5Fill } from "react-icons/ri";
import { Link,useLocation } from "react-router-dom";
const Navbar = ({btnColor="bg-white",btnText="text-black",src="sitelogo2.png"}) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;

  };
 
  return (
    <div className=" max-w-screen-xl mx-auto py-6 flex flex-row items-center justify-between border-b-[1px] border-zinc-700  ">
      <div className=" flex items-center  ">
        <img
          src={src}
          alt=""
          className="w-28 md:w-40 "
        />
           <button className="  w-56 h-32 p-14 ml-16  flex flex-col items-end  md:hidden focus:outline-none " onClick={toggleMenu}>
          {/* Mobile menu icon */}
          <RiMenu5Fill />
          </button>
             <div  className=" md:hidden   mt-16   h-[40%] w-full z-30 ">
           

          <div className={` mainlinks ${isMenuOpen ? "bg-zinc-900 left-0 w-full flex flex-col h-[50%] my-4 absolute  items-start gap-10  " : "hidden"} `}>
            
            <div className={` flex flex-col px-10 gap-4 `}>
              {["Home", "Work", "Careers", "", "News"].map((elem, index) =>
              
                elem.length === 0 ? (
                  <span key={Date.now()} className="md:w-[2px] md:h-7 border-b-[1px] md:bg-zinc-700"></span>
                ) : (
                  <Link
                  key={index}
                  to={`/${elem.toLowerCase()}`}
                  className={`text-lg text-white flex items-center gap-1 ${index===3} ${
                    isActive(`/${elem.toLowerCase()}`) && elem === "News"
                      ? "bg-white text-zinc-900 p-2 rounded-3xl w-16" 
                      : ""
                  }` }
                 
                  
    
                >
                  
        
                    {location.pathname === `/${elem.toLowerCase()}` && (
                      <span
                        style={{ boxShadow: " 0 0 0.45rem #00FF19" }}
                        className="inline-block w-1 h-1 rounded-full bg-green-500"
                      ></span> 
                      
                    )}
                    {elem}
                    </Link>
                )
              )}
            </div>
            <div className="mx-8">
            <Button  btnColor="bg-white" btnText="text-black"/>
            </div>
            
          </div>
         
      
    
          </div>


     


       
       
        <div className={`links   hidden md:flex gap-14 ml-20  `}>
          {["Home", "Work", "Careers", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={Date.now()} className="md:w-[2px] md:h-7 border-b-[1px] md:bg-zinc-700"></span>
            ) : (
              <Link
              key={index}
              to={`/${elem.toLowerCase()}`}
              className={`text-sm  flex items-center gap-1 ${
                isActive(`/${elem.toLowerCase()}`) && elem === "News"
                  ? "bg-white text-black p-2 rounded-3xl w-16" 
                  : ""
              }` }
             
              

            >
              
    
                {location.pathname === `/${elem.toLowerCase()}` && (
                  <span
                    style={{ boxShadow: " 0 0 0.45rem #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-500"
                  ></span> 
                  
                )}
                {elem}
                </Link>
            )
          )}
        </div>
      </div>
      <div className="hidden md:block">
        <Button btnColor={btnColor} btnText={btnText} />
      </div>
    </div>
  );
};

export default Navbar;
