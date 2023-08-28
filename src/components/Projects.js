// src/components/Projects.js

import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../../public/data";
import {AiFillGithub} from "react-icons/ai";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 body-font rounded-xl">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Personal Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Feel free to contact me regarding the details of my projects and the work I've done.
          </p>
        </div>
        <div className="flex flex-wrap">
          {projects.map((project) => (
            <>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
            <a target="_blank"
              rel="noopener noreferrer"
              href={project.github} className='text-2xl mt-10'>
            <AiFillGithub className="text-3xl inline mr-2 pb-1" />
            Source Code
          </a> */
          <a href={project.link} target="_blank" rel="noopener noreferrer" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-4">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={project.image} alt=""></img>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
        <h3 className="text-red-300">{project.status}</h3>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
        <h4 class="mb-2 text-xl font-bold tracking-tight text-gray-900">Technologies Used</h4>
        <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Test</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Test</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Test</span>
  </div>
        <h2 className="tracking-widest text-sm title-font font-medium text-grey-400 mb-1">{project.subtitle}</h2>
        <a target="_blank"
              rel="noopener noreferrer"
              href={project.github} className='text-xl'>
            <AiFillGithub className="text-3xl inline mr-2 pb-1" /></a>
    </div>
</a>
          }
            </>
          ))}
        </div>
      </div>
    </section>
  );
}