import React from "react";

import thumbnailLetsTreatAuthorityRelationally from "../pdf-thumbnails/bingham-lets-treat-authority-relationally.png";
import pdfLetsTreatAuthorityRelationally from "../pdfs/bingham-lets-treat-authority-relationally.pdf";

import thumbnailSocialReproductionTheoryRevisited from "../pdf-thumbnails/social-reproduction-theory-revisited.png";
import pdfSocialReproductionTheoryRevisited from "../pdfs/social-reproduction-theory-revisited.pdf";

import thumbnailPedagogyOfTheOppressed from "../pdf-thumbnails/pedagogy-of-the-oppressed.jpg";
import pdfPedagogyOfTheOppressed from "../pdfs/pedagogy-of-the-oppressed.pdf";

import thumbnailAlienatedLearningInHongKongAMarxistPerspective from "../pdf-thumbnails/alienated-learning-in-hong-kong-a-marxist-perspective.png";
import pdfAlienatedLearningInHongKongAMarxistPerspective from "../pdfs/alienated-learning-in-hong-kong-a-marxist-perspective.pdf";

const Resources = () => {
  const resources = [
    {
      id: 1,
      image: thumbnailLetsTreatAuthorityRelationally,
      file: pdfLetsTreatAuthorityRelationally,
      name: "Let’s Treat Authority Relationally",
    },
    {
      id: 2,
      image: thumbnailSocialReproductionTheoryRevisited,
      file: pdfSocialReproductionTheoryRevisited,
      name: "Social Reproduction Theory Revisited",
    },
    {
      id: 3,
      image: thumbnailPedagogyOfTheOppressed,
      file: pdfPedagogyOfTheOppressed,
      name: "Pedagogy of the Oppressed",
    },
    {
      id: 4,
      image: thumbnailAlienatedLearningInHongKongAMarxistPerspective,
      file: pdfAlienatedLearningInHongKongAMarxistPerspective,
      name: "Alienated Learning in Hong Kong",
    },
  ];

  const references = [
    {
      id: 1,
      citation:
        "Bingham, C. (2004). Let’s Treat Authority Relationally. Counterpoints, 259, 23–37. http://www.jstor.org/stable/42978491",
    },
    {
      id: 2,
      citation:
        "Chapin, H. (2016, May 18). Flowers Are Red. YouTube. https://youtu.be/7qrbNygL0YU?feature=shared",
    },
    {
      id: 3,
      citation:
        "David I. Backer & Kate Cairns (2021) Social reproduction theory revisited, British Journal of Sociology of Education, 42:7, 1086-1104, DOI: 10.1080/01425692.2021.1953962",
    },
    {
      id: 4,
      citation:
        "Freire, P. (2017). Pedagogy of the Oppressed. Penguin Classics.",
    },
    {
      id: 5,
      citation:
        "Kwok Kuen Tsang, Yi Lian & Zhiyong Zhu (2021) Alienated Learning in Hong Kong: A Marxist Perspective, Educational Philosophy and Theory, 52:2, 181-196, DOI: 10.1080/00131857.2020.1767588",
    },
  ];

  return (
    <section id="resources" className="w-full bg-gray-100 pt-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-700 mb-4 text-center md:text-left">
          Resources 🗂
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center md:text-left">
          Dive deeper into the topics we've explored. Feel free to download the
          resources below to expand your knowledge and go beyond the blog!
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10"></div>

          <div className="flex space-x-6 animate-slide">
            {resources.concat(resources, resources).map((resource, index) => (
              <div
                key={index}
                className="shrink-0 group text-center w-40 mx-auto"
              >
                <a href={resource.file} download className="relative block">
                  <img
                    src={resource.image}
                    className="shadow-lg w-40 h-40 object-cover rounded-lg hover:scale-105 transform transition duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
                    <span className="text-white text-3xl">📥</span>
                  </div>
                </a>
                <p className="mt-2 text-sm text-gray-800 font-semibold">
                  {resource.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4 text-center md:text-left">
            Explicit References 📋
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-4 text-center md:text-left">
            {references.map((reference) => (
              <li key={reference.id} className="text-lg">
                {reference.citation}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resources;
