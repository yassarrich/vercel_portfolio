// src/components/About.js
import { TypeAnimation } from 'react-type-animation';
import { UserIcon } from "@heroicons/react/24/solid";
import React from "react";


export default function Description() {
  return (
    <section id="about">
      <div className="container px-5 py-10 mx-auto border-t-[3px]">
        <div className="text-center mb-10">
        <UserIcon className="w-10 inline-block mb-4 text-white"></UserIcon>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            About
          </h1>
          <p className=" text-white text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          In a world increasingly shaped by technology, my journey in computer science has been driven by a desire to understand its impact on our lives. As a first-generation college student, I've learned the importance of harnessing my diverse experience to use as fuel to propel me forward. 
          </p>
          <br></br>
          <p className=" text-white text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          My work experience and academic pursuits have allowed me to develop a keen eye for identifying areas where technology can be used to enhance how we interact with the world. I envision a future where my contributions to the field extend beyond technical advancements, facilitating an environment where technology serves as a catalyst for growth to all. 
          </p>
          
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
         
        </div>
      </div>
    </section>
  );
}