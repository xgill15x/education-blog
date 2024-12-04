import React from "react";

const Resources = () => {
  const resources = [
    { id: 1, image: "../images/resource1.jpg", link: "https://example.com/1" },
    { id: 2, image: "../images/resource2.jpg", link: "https://example.com/2" },
    { id: 3, image: "../images/resource3.jpg", link: "https://example.com/3" },
    { id: 4, image: "../images/resource4.jpg", link: "https://example.com/4" },
  ];

  return (
    <section id="resources" className="w-full bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-700 mb-8 text-center">
          Resources 🗂
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-slide">
            {resources.concat(resources).map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <img
                  src={resource.image}
                  alt={`Resource ${index + 1}`}
                  className="shadow-lg w-40 h-40 object-cover hover:scale-105 transform transition duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
