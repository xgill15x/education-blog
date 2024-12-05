import React from "react";

const Card = ({ title, description, gradient, onClick }) => {
  return (
    <div
      className={`rounded-lg shadow-lg p-6 text-white ${gradient} hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-xl cursor-pointer flex flex-col items-center`}
      onClick={onClick}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-center mb-4">{description}</p>
      <div className="flex flex-col items-center">
        <span className="text-lg font-semibold animate-bounce">Click me!</span>
        <span className="text-3xl animate-bounce">☝️</span>
      </div>
    </div>
  );
};

export default Card;
