import React from "react";
import JasonImage from "../images/jason.jpg";
import HoangImage from "../images/hoang.png";

const About = () => {
  const authors = [
    {
      name: "Jason Gill",
      bio: "Hey, I'm Jason. I've attended both private and public schools in Canada and experienced how cultural and religious influences play a part in modern education. These experiences have allowed me to garner a breadth of perspectives on the art of pedagogy. While my education has been rooted in Canadian education, I collaborate closely with Hoang to pair my insights with his international perspective. Having recently been enlightened by the ideas presented in SFU's 'Social Issues in Education' class, I aim to provide educators with the intellectual sustenance that I believe will help them create a positive impact for all students.",
      image: JasonImage,
    },
    {
      name: "Hoang Nguyen",
      bio: "Hi, I'm Hoang. As an international student, I have had the opportunity to study in two completely different educational settings, in two different cultures, each with its own approach to pedagogy. Having experienced both settings, I’ve seen firsthand how the relationship between teachers and students can shape the learning experience. My story and advice come from this unique perspective, where I now vouch for the importance of creating an environment that values student voice. By sharing my insights, I hope to help educators reflect on how we can improve the educational experience for future generations.",
      image: HoangImage,
    },
  ];

  return (
    <section id="about" className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h2 className="text-4xl font-bold text-teal-700 mb-8">About Us 👋</h2>
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
