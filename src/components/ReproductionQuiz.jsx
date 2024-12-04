import React, { useState } from "react";

const ReproductionQuiz = () => {
  const questions = [
    {
      question: "What does Social Reproduction Theory (SRT) primarily examine?",
      options: [
        "How education prepares individuals for specific societal roles",
        "How education focuses only on academic success",
        "How teachers foster creativity and innovation",
        "How students choose their career paths freely",
      ],
      correct: 0,
      explanation:
        "SRT examines how education systems reinforce societal norms and prepare individuals for specific societal roles, often perpetuating existing inequalities.",
    },
    {
      question:
        "What is a key critique of the education system according to SRT?",
      options: [
        "It encourages creativity and originality",
        "It perpetuates existing societal inequalities",
        "It eliminates socioeconomic hierarchies",
        "It is free from societal influences",
      ],
      correct: 1,
      explanation:
        "SRT critiques how education systems often reinforce class, race, and gender inequalities instead of eliminating them.",
    },
    {
      question: "How can teachers challenge the patterns identified in SRT?",
      options: [
        "By reinforcing existing norms",
        "By promoting critical thinking and creativity",
        "By avoiding discussions on societal issues",
        "By emphasizing strict classroom hierarchies",
      ],
      correct: 1,
      explanation:
        "Teachers can challenge SRT patterns by fostering creativity, encouraging critical thinking, and questioning societal norms.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (index) => {
    setSelectedOption(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
      setFeedback({
        type: "correct",
        text: `✅ Correct! ${questions[currentQuestion].explanation}`,
      });
    } else {
      setFeedback({
        type: "incorrect",
        text: "❌ Incorrect. Please try again.",
      });
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setFeedback(null);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto text-center">
      {showScore ? (
        <div>
          <h3 className="text-2xl font-bold text-teal-600 mb-4">
            Quiz Completed!
          </h3>
          <p className="text-lg text-gray-700">
            {
              [
                "Great job! 👌",
                "You made that look easy! 🤌",
                "You're a rockstar! 🎸",
              ].sort(() => Math.random() - 0.5)[0]
            }
          </p>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-bold text-teal-600 mb-4">
            Question {currentQuestion + 1}/{questions.length}
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            {questions[currentQuestion].question}
          </p>
          <div className="flex flex-col space-y-4 mb-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`py-2 px-4 rounded-lg transition ${
                  feedback?.type === "correct" &&
                  index === questions[currentQuestion].correct
                    ? "bg-green-500 text-white"
                    : selectedOption === index
                    ? "bg-red-500 text-white"
                    : "bg-teal-500 text-white hover:bg-teal-600"
                }`}
                onClick={() => handleAnswerClick(index)}
                disabled={feedback?.type === "correct"}
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && (
            <div
              className={`p-4 rounded-lg mb-4 ${
                feedback.type === "correct"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {feedback.text}
            </div>
          )}
          {feedback?.type === "correct" && (
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              onClick={handleNextQuestion}
            >
              {currentQuestion + 1 < questions.length
                ? "Next Question ➡️"
                : "Submit 🔥"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ReproductionQuiz;
