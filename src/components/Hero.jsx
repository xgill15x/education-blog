import React from "react";
import Card from "./Card";

const Hero = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat text-white min-h-screen w-full flex flex-col justify-center items-center text-center px-4">
      <div className="p-6  w-full max-w-3xl mt-4">
        <h2 className="text-4xl font-bold mb-4">
          Are You Ready to Turn Good Teaching into Great Teaching? 🤗
        </h2>
        <p className="text-lg">
          Reimagine teaching by understanding Shared Authority and Social
          Reproduction. Start exploring transformative ideas today 👇
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mb-8 px-4 max-w-6xl w-full">
        <Card
          title="Shared Authority 🤝"
          description="Gain the ability to lead and inspire others in the community."
          gradient="bg-gradient-to-r from-green-400 to-teal-500"
          bg-gradient-to-r
          from-green-400
          to-teal-500
          onClick={() => {
            document
              .getElementById("authority")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Card
          title="Social Reproduction 🌱"
          description="Build and replicate successful ideas for impactful projects."
          gradient="bg-gradient-to-r from-yellow-400 to-orange-500"
          onClick={() => {
            document
              .getElementById("reproduction")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
