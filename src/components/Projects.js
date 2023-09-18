// src/components/Projects.js

import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../../public/data";
import {AiFillGithub} from "react-icons/ai";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 body-font rounded-xl">
      <div className="container mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Personal Projects
          </h1>
          
        </div>
        <div className="flex flex-wrap justify-center mt-4">
          {projects.map((project) => (
            <>
            {
          <a href={project.link} target="_blank" rel="noopener noreferrer" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-4">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={project.image} alt=""></img>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
        <h3 className="text-red-300">{project.status}</h3>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
        <h4 class="mb-2 text-xl font-bold tracking-tight text-gray-900">Technologies Used</h4>
        <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.tech[0]}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.tech[1]}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.tech[2]}</span>
  </div>
        <h2 className="tracking-widest text-sm title-font font-medium text-grey-400 mb-1">Source Code</h2>
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
        <div className="flex flex-col w-full mt-5">
          <p className="lg:w-2/3 mx-auto mb-10 leading-relaxed text-base">
            Feel free to contact me regarding the details of my projects at yassarrich@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}