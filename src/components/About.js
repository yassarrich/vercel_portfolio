// src/components/About.js
import { TypeAnimation } from 'react-type-animation';
import React from "react";

import {
  AiFillLinkedin, 
  AiFillGithub
} from "react-icons/ai";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col border-t-[3px]  items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-14 md:mb-0 items-center text-center ">
       
          <h1 className='title-font pt-5 sm:text-xl text-l mb-2 font-medium text-white '>
          <TypeAnimation
      sequence={[
              'Hi, I\'m Yassar.',
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              'Hi,',
              1000,
              'Hi, I\'m Yassar.',
              2000
            ]}
      wrapper="span"
      speed={35}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        <br className="hidden lg:inline-block" /> 
          </h1>
          <p className="mb-3 mt-3 leading-relaxed text-white">
          Forward-thinking and Innovative, I am passionate about leveraging my skills to develop cutting-edge solutions for various needs.</p>
          <p className="mb-1 leading-relaxed text-white">
          I am open to full-time positions upon completion of my Bachelor's degree in December 2023.</p>
          
        <div className="flex justify-center gap-5 pt-5 text-white">
          <div className="text-5xl">
          <a target="_blank" rel="noopener noreferrer"href='https://www.linkedin.com/in/yassarrich/'>
            <AiFillLinkedin />
          </a></div>
          <div className="text-5xl">
          <a className="mr-2"target="_blank" rel="noopener noreferrer" href='https://github.com/yassarrich'>
            <AiFillGithub />
          </a></div>

          </div>
          
          <div className="flex justify-center">
          
          {/* <Link
                      activeClass="active"
                      to='/https://www.linkedin.com/in/yassarrich/'
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                      className='mt-6 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
                    >
                    Work With Me </Link> */}
        <a
          href="/Resume_YassarRich_2023.pdf" target="_blank" rel="noopener noreferrer"
          className='mt-1 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
        >View Resume</a>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src="/aboutme.jpg"
          />
        </div>
      </div>
    </section>
  );
}