import React from "react";
import Card from "./Card";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-cover bg-center bg-no-repeat text-white min-h-screen w-full flex flex-col justify-center items-center text-center px-4"
    >
      <div className="p-6 w-full max-w-3xl mt-4">
        <h2 className="text-4xl font-bold mb-4">
          Elevating Teachers, Empowering Futures and Redefining Education 🎯
        </h2>
        <p className="text-lg">
          Our goal is to help new and experienced teachers alike reimagine
          teaching by discussing Social Reproduction and Shared Authority. Start
          exploring game-changing ideas today 👇
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mb-8 px-4 max-w-6xl w-full">
        <Card
          title="1. Social Reproduction 🌱"
          description="Discover how classroom practices shape societal norms and inspire students to challenge and redefine the world around them."
          gradient="bg-gradient-to-r from-yellow-400 to-orange-500"
          onClick={() => {
            document
              .getElementById("reproduction")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Card
          title="2. Shared Authority 🤝"
          description="Explore how Shared Authority in the classroom creates a space for mutual respect, creativity, and meaningful learning."
          gradient="bg-gradient-to-r from-green-400 to-teal-500"
          onClick={() => {
            document
              .getElementById("authority")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
      <div className="mb-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
        <a
          href="#resources"
          className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-200"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("resources")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Our Resources
        </a>
        <a
          href="#about"
          className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-200"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Learn About the Authors
        </a>
      </div>
    </section>
  );
};

export default Hero;
