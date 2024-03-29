import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Quote from '@/components/Quote';
import About from '@/components/About';
import Desc from '@/components/Desc';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Timeline from '@/components/TimelineContainer'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className='bg-slate-900 max-w-10xl'>
    <div className='bg-slate-900 mx-auto max-w-10xl'>
      <Head>
        <title>Yassar Rich Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>
      <Header></Header>

      <main className="max-w-6xl mx-auto bg-gray-900 px-10">
      <Quote></Quote>
        <div id="">
          <About></About>
        </div>
        <div id="#about">
          <Desc></Desc>
        </div>
        <div id="#experience">
          <Timeline></Timeline>
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
        <Footer></Footer>
      </main>
      
    </div>
    </div>
  );
}

