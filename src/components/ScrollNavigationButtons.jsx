import React, { useState, useEffect } from "react";

const sectionIds = [
  "header",
  "reproduction",
  "authority",
  "resources",
  "about",
];

const ScrollNavigationButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);

      let closestSectionIndex = 0;
      let closestDistance = Infinity;

      sectionIds.forEach((id, index) => {
        const element = document.getElementById(id);
        if (element) {
          const distance = Math.abs(element.getBoundingClientRect().top);
          if (distance < closestDistance) {
            closestSectionIndex = index;
            closestDistance = distance;
          }
        }
      });

      setCurrentSectionIndex(closestSectionIndex);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (index) => {
    const sectionId = sectionIds[index];
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    isVisible && (
      <div className="fixed bottom-8 right-4 md:right-8 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center">
        <button
          onClick={scrollToTop}
          className="bg-teal-500 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-teal-600 transition duration-300 text-sm md:text-base"
        >
          👆 {isSmallScreen ? "Top" : "Go to Top"}
        </button>

        {currentSectionIndex > 0 && (
          <button
            onClick={() => scrollToSection(currentSectionIndex - 1)}
            className="bg-blue-500 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 text-sm md:text-base"
          >
            👈 {isSmallScreen ? "Prev" : "Prev Section"}
          </button>
        )}

        {currentSectionIndex < sectionIds.length - 1 && (
          <button
            onClick={() => scrollToSection(currentSectionIndex + 1)}
            className="bg-green-500 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 text-sm md:text-base"
          >
            👉 {isSmallScreen ? "Next" : "Next Section"}
          </button>
        )}
      </div>
    )
  );
};

export default ScrollNavigationButtons;
