// src/components/About.js
import { TypeAnimation } from 'react-type-animation';
import React from "react";
import {Link} from 'react-scroll'
import {
  AiFillLinkedin, 
  AiFillGithub
} from "react-icons/ai";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
  
          <h1 className='title-font sm:text-xl text-l mb-2 font-medium text-white'>
          <TypeAnimation
      sequence={[
              'Hi, im Yassar',
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              'Hi,',
              1000,
              'Hi, im Yassar',
              2000
            ]}
      wrapper="span"
      speed={35}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={5}
    />
        <br className="hidden lg:inline-block" /> 
          </h1>
          <p className="mb-1 leading-relaxed text-white">
          Welcome to my website, I am a Computer Science Student at Florida State University who is passionate about leveraging my skills to develop cutting-edge software solutions for various needs.</p>
          
            <div className="text-5xl flex justify-center gap-6 py-3 text-white">
          <a href='https://www.linkedin.com/in/yassarrich/'>
            <AiFillLinkedin />
          </a>
          <a href='https://github.com/yassarrich'>
            <AiFillGithub />
          </a>

          </div>
          
          <div className="flex justify-center">
          <Link
                      activeClass="active"
                      to='#contact'
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                      className='mt-6 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
                    >
                    Work With Me </Link>
        
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src="/1_fuLw6zRUiMZI63hoz-VDXg.png"
          />
        </div>
      </div>
    </section>
  );
}