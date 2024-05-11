import React from "react";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      logoSrc:"Arqitel_logo.png",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
        firstImg:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15-p-500.webp",
        secondImg:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp",
        videoSrc:"videos/Arqitel.webm",
        tileColor:"bg-violet-600",
    },
    {
      logoSrc: "cula_logo.png",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.        ",
        firstImg:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png",
        secondImg:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png",
        videoSrc:"videos/CulaVideo.webm",
        tileColor:"bg-slate-500",

   
    },
    {
      logoSrc: "webflow_logo.png",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.       ",
        firstImg:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp",
        secondImg:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1).webp",
        videoSrc:"videos/webflowVideo.webm",
        tileColor:"bg-blue-700",

      
    },
    {
      logoSrc: "Silvr_logo.png",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand and enhance their productivity.       ",
        firstImg:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01-p-500.jpg",
        secondImg:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f66c6594c072ba1a38_02.jpg",
        videoSrc:"videos/Silvr.webm",
        tileColor:"bg-orange-500",

      
    },
  ];


  return (<div >
    {posts.map((post,index)=>(
      <Post post={post} key={index}/>
    ))}
   
  </div>
  )
};

export default Posts;
