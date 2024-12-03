import React from "react";
import Card from "./Card";
import BackgroundImage from "../images/classroom-background.jpg";

const Hero = () => {
  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-white min-h-screen w-full flex flex-col justify-center items-center text-center px-4"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="p-6 rounded-md bg-black bg-opacity-50 w-full max-w-3xl mt-8">
        <h2 className="text-4xl font-bold mb-4">
          Welcome First-Time Educators!
        </h2>
        <p className="text-lg mb-6">
          Join us in making a difference and connecting with like-minded
          individuals.
        </p>
        <a
          href="#membership"
          className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-200"
        >
          Call-to-action
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-8 px-4 max-w-6xl w-full">
        <Card
          title="Authority"
          description="Gain the ability to lead and inspire others in the community."
          gradient="bg-gradient-to-r from-yellow-400 to-orange-500"
          onClick={handleCardClick}
        />
        <Card
          title="Recognition"
          description="Access valuable resources and opportunities to grow."
          gradient="bg-gradient-to-r from-blue-500 to-purple-500"
          onClick={handleCardClick}
        />
        <Card
          title="Reproduction"
          description="Build and replicate successful ideas for impactful projects."
          gradient="bg-gradient-to-r from-green-400 to-teal-500"
          onClick={handleCardClick}
        />
      </div>
    </section>
  );
};

export default Hero;
