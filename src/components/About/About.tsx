import React from "react";

const About = () => {
  return (
    <div id="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <p className="pb-8 text-4xl font-bold inline ">
          <text className="border-b-4 border-gray-500">About</text>
        </p>
        <p className="text-xl pb-5">
          I am a software developer with 2 years of professional experience
          specializing in ReactJs and TypeScript. I have leveraged these
          technologies to build and optimize interactive, user-friendly
          applications, and have a good understanding of web development
          fundamentals.
        </p>
        <p className="text-xl pb-5">
          In addition to my professional experience, I have hands-on experience
          with Java and Spring Boot through personal projects. This experience
          has given me a strong foundation in back-end development and has
          allowed me to build full-stack applications.
        </p>
        <p className="text-xl">
          To further enhance my data structures and algorithms knowledge, I have
          solved approximately 90 problems on LeetCode. This practice has not
          only improved my problem-solving skills but also deepened my
          understanding of algorithmic efficiency and complexity analysis. I am
          always eager to learn and improve, and I believe that my blend of
          experiences and eagerness to grow make me a strong software developer.
        </p>
      </div>
    </div>
  );
};

export default About;
