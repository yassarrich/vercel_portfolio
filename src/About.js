// src/components/About.js

import React from "react";
import photo from '../public/Prismatic-Code-Head.png';
import {
  AiFillLinkedin, 
  AiFillGithub
} from "react-icons/ai";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Yassar
            <br className="hidden lg:inline-block" /> and I love to code.
          </h1>
          
          <p className="mb-8 leading-relaxed">
          Thank you for taking the time to view my website. My name is Yassar Rich and I am a Software Engineer currently pursuing a degree in Computer Science.
          </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a href='https://www.linkedin.com/in/yassarrich/'>
            <AiFillLinkedin />
          </a>
          <a href='https://github.com/yassarrich'>
            <AiFillGithub />
          </a>

          </div>
          
          <div className="flex justify-center">
            <a
              href="#contact"
              className="mt-6 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src="https://images.unsplash.com/photo-1678560722965-ab56efb3550b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=935&q=80"
          />
        </div>
      </div>
    </section>
  );
}