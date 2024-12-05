import React, { useState } from "react";

const AuthorityQuiz = () => {
  const questions = [
    {
      question: "According to Paulo Freire, the 'banking education' model:",
      options: [
        "Encourages students to critically engage and question the knowledge presented",
        "Positions students as active participants in their learning",
        "Treats students as passive recipients of knowledge, with no room for questioning",
        "Focuses on collaborative learning and idea-sharing among students",
      ],
      correct: 2,
      explanation:
        "The 'banking education' model, as described by Paulo Freire, treats students as passive recipients of knowledge, where the teacher deposits information without encouraging critical thinking or questioning.",
    },
    {
      question:
        "In Charles Bingham’s view, for authority to succeed in educating a student, the student must:",
      options: [
        "Challenge and question the teacher’s knowledge",
        "Passively memorize the teacher's content without further reflection",
        "Reject the teacher’s authority to build independence",
        "Authorize the teacher by recognizing and accepting the value of the teacher's knowledge",
      ],
      correct: 3,
      explanation:
        "Charles Bingham emphasizes that authority requires mutual acknowledgment where the student decides to let the teacher's insight guide their learning.",
    },
    {
      question:
        "What is one of the changes suggested to address the issue of authority in education?",
      options: [
        "Emphasize the learning process over just getting the 'right' answer and celebrate effort",
        "Focus solely on providing students with the 'right' answers",
        "Encourage students to follow the teacher’s authority without question",
        "Limit student participation to ensure respect for the teacher’s authority",
      ],
      correct: 0,
      explanation:
        "Emphasizing the learning process over the 'right' answer and celebrating the effort makes students active participants in their education.",
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
      const incorrectPhrases = [
        "🫣 Woops! Doesn't hurt to try again!",
        "😕 Not quite right. Give it another shot!",
        "🙁 Oops! Try once more.",
      ];
      setFeedback({
        type: "incorrect",
        text: incorrectPhrases[
          Math.floor(Math.random() * incorrectPhrases.length)
        ],
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
            You've tested your knowledge!
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

export default AuthorityQuiz;
