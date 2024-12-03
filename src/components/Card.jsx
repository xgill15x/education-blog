import React from "react";

const Card = ({ title, description, gradient, onClick }) => {
  return (
    <div
      className={`rounded-lg shadow-lg p-6 text-white ${gradient} hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-xl cursor-pointer`}
      onClick={onClick}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
