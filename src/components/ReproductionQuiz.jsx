import React, { useState } from "react";

const ReproductionQuiz = () => {
  const questions = [
    {
      question:
        "What is the primary focus of Social Reproduction Theory (SRT) in education?",
      options: [
        "To explore how students can become better test-takers",
        "To analyze how societal norms and inequalities are reproduced through education",
        "To prepare students for creative and artistic careers",
        "To identify the best teaching methods for every classroom",
      ],
      correct: 1,
      explanation:
        "SRT focuses on how education systems reinforce societal norms, values, and inequalities over generations.",
    },
    {
      question:
        "According to Freire, who must lead the struggle for a fuller humanity?",
      options: [
        "The oppressed, who must reclaim their humanity",
        "Teachers, who are responsible for societal reform",
        "The government, through educational policies",
        "Societal elites, as they shape educational goals",
      ],
      correct: 0,
      explanation:
        "Freire emphasizes that “[the oppressed] who must, from their stifled humanity, wage for the struggle for a fuller humanity” as the oppressor cannot lead this struggle.",
    },
    {
      question:
        "What is a key way teachers can empower students in the classroom?",
      options: [
        "By minimizing interactions and focusing on lectures",
        "By encouraging competition among peers",
        "By involving students in shaping their educational experiences",
        "By setting high expectations and strict discipline",
      ],
      correct: 2,
      explanation:
        "Teachers can empower students by involving them in shaping their educational experiences which allows for critical thinking and genuine reflection.",
    },
    {
      question:
        "What does the song 'Flowers Are Red' primarily highlight about education?",
      options: [
        "The value of strict classroom routines",
        "The role of teachers in enforcing rules",
        "The importance of academic success over creativity",
        "The dangers of stifling creativity and individuality",
      ],
      correct: 3,
      explanation:
        "'Flowers Are Red' highlights how detrimental rigid educational systems can be in suppressing creativity and individuality, as reflected by the themes of SRT.",
    },
    {
      question:
        "What is an effective way to go beyond the curriculum in teaching?",
      options: [
        "Focusing exclusively on test preparation",
        "Encouraging healthy tangents to connect material to students' interests",
        "Avoiding discussions unrelated to the syllabus",
        "Sticking strictly to the approved curriculum",
      ],
      correct: 1,
      explanation:
        "Going beyond the curriculum involves encouraging meaningful tangents that relate material to students’ interests and experiences.",
    },
    {
      question:
        "How should teachers handle students' passions and interests in the classroom?",
      options: [
        "Guide students toward practical career-oriented goals",
        "Allow them to shape students' educational paths",
        "Acknowledge passions but prioritize standardized testing",
        "Focus on academics and consider passions secondary",
      ],
      correct: 1,
      explanation:
        "Teachers should nurture students' passions and interests to help them shape their identity and encourage authentic growth.",
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

export default ReproductionQuiz;
