import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";

const skills= [
    "HTML and CSS", 
    "Javascript",
    "C++",
    "Python",
    "React",
    "TailwindCSS",
    "Databases",
    "NodeJs",
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
        <CpuChipIcon className="w-10 inline-block mb-4 text-white" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills
          </h1>
          <p className=" text-white text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Throughout my time in university, I've actively worked on improving my technical skills. By taking on personal projects that interest me, I've managed to refine my abilities and better prepare myself for a career in the industry using these technologies...
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}