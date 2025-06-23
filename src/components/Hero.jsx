import React from "react";
import { Typewriter } from "react-simple-typewriter";
import developerImage from "../assets/developer.svg";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-[60vh] flex items-center justify-center">
      <div className="grid max-w-screen-xl px-4 p-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center mr-6">
        {/* Text Content */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hi There! <i></i>
          </h2>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            I'M <span className="text-purple-500">SYLVESTER ASARE</span>
          </h1>
          <h3 className="max-w-2xl mb-6 text-2xl font-light text-gray-500 lg:mb-8 md:text-3xl dark:text-purple-400">
            <Typewriter
              words={[
                "Web Developer",
                "Open Source Contributor",
                "Tech Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          {/* <div className="flex flex-col sm:flex-row sm:space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mb-3 sm:mb-0 text-base font-medium text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
            >
              Get Started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div> */}
        </div>

        {/* Image Section */}
        <div className="lg:mt-0 lg:col-span-5 lg:flex justify-center">
          <img
            src={developerImage}
            alt="Developer"
            className="w-[300px] md:w-[400px] max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
