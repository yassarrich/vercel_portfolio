// src/components/About.js
import { TypeAnimation } from 'react-type-animation';
import { user } from "@heroicons/react/24/solid";
import React from "react";


export default function Description() {
  return (
    <section id="about">
      <div className="container px-5 py-10 mx-auto border-t-[3px]">
        <div className="text-center mb-10">
        <user className="w-10 inline-block mb-4 text-white" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 inline-block mb-4 text-white">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            About Me
          </h1>
          <p className=" text-white text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
         Technology has steadily grown in its presence and affected us in ways we might not always be mindful of. I initally turned to computer science in order to understand of the way in which technology influences our life, this has led me to gain a key eye to see pockets where we can use techology to optimize the way we interact with the world.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
         
        </div>
      </div>
    </section>
  );
}