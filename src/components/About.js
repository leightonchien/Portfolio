// src/components/About.js

import React from "react";

export default function About() {

    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Leighton.
                <br className="hidden lg:inline-block" />I love to build amazing
                apps.
              </h1>
              <p className="mb-8 leading-relaxed">
              Embarking on a new journey in web + mobile development,
Leighton comes from a background of biological sciences and healthcare.

The career pivot set sail amidst COVID-19 pandemic in Canada, where he seized the opportunity to join Lighthouse Labs for web development. The journey was an intensive yet life changing one. Finally, he was able to switch the hat from an user to a developer! A new horizon awaits and he is ecstatic to build more apps and projects that provide creative solutions to problems.

Born in Taiwan, he grew up in Vancouver, Canada.
It is here in Vancouver he took to heart how beautiful it is to connect with people from diverse backgrounds through sharing ideas, music, and soul lifting food. Studying the aesthetics of different cultures around the globe is his hobby.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
      );



}