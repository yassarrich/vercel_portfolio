import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Quote from '@/components/Quote';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  const[darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Head>
        <title>Yassar Rich Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>
      <Header></Header>
      <Quote></Quote>
      
      <main className=" bg-gray-900 px-10">
    
      <div id="#about">
       <About ></About>
       </div>

      <div id="#skills">
      <Skills></Skills>
      </div>

      <div id="#projects">
      <Projects></Projects>
      </div>

      <div id="#contact">
      <Contact></Contact>
      </div>   
      </main>
      <Footer></Footer>
    </div>

  )
}
