import React from "react";

const About = () => {
  const authors = [
    {
      name: "Jason Gill",
      bio: "Computer Scientist and Student",
      image: "../images/jason.jpg",
    },
    {
      name: "Hoang Nguyen",
      bio: "Computer Scientist and Student",
      image: "../images/hoang.jpg",
    },
  ];

  return (
    <section id="about" className="w-full bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl font-bold text-teal-700 mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {authors.map((author, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <img
                src={author.image}
                alt={author.name}
                className="w-32 h-32 rounded-full shadow-lg mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-teal-600 mb-2">
                {author.name}
              </h3>
              <p className="text-gray-700 text-center">{author.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
