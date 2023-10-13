import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";

const skills= [
    "HTML, CSS, and Javascript", 
    "Next.js",
    "Database (SQL, NoSQL)",
    "Python",
    "React",
    "Tailwind CSS",
    "C++",
    "NodeJs",
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto border-t-[3px]">
        <div className="text-center mb-10">
        <CpuChipIcon className="w-10 inline-block mb-4 text-white" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills
          </h1>
          <p className=" text-white text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Due to rapid changes in the state of our industry, I actively stay abreast with emerging trends in the tech industry. My work experience, coupled with the classes i've taken, has exposed me to the following technologies.
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