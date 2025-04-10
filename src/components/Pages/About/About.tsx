import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pt-24 pb-16 px-4"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 dark:text-white">
          About Me
        </p>
      </div>

      <p className="text-xl mt-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        As a Technology Analyst with over 3+ years of expertise in React,
        TypeScript, and JavaScript, my focus lies in developing responsive user
        interfaces and enhancing application performance. I have a proven track
        record of working collaboratively with cross-functional teams to deliver
        high-quality software solutions and improve user experience.
      </p>

      <p className="text-xl mt-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        Beyond my core frontend work, I've also explored backend development
        using Java/Spring Boot in personal projects and continuously sharpen my
        problem-solving skills through platforms like LeetCode.
      </p>
    </div>
  );
};

export default About;
