import React, { useState } from "react";

const patterns = [
  {
    question: "Which shape completes the pattern?",
    options: ["▲", "■", "●", "◆"],
    correct: 2,
  },
  {
    question: "What comes next: 2, 4, 8, 16, ?",
    options: ["20", "24", "32", "30"],
    correct: 2,
  },
  {
    question: "Find the missing shape in the sequence.",
    options: ["⬛⬜⬛⬜", "⬜⬛⬜⬛", "⬛⬛⬜⬜", "⬜⬜⬛⬛"],
    correct: 0,
  },
  {
    question: "Which number completes the pattern: 1, 3, 6, 10, ?",
    options: ["14", "15", "16", "18"],
    correct: 1,
  },
];

const PatternRecognitionGame = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (index) => {
    setSelected(index);
    if (index === patterns[current].correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (current < patterns.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 600);
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center p-4">
      <div className="w-full max-w-xl shadow-2xl p-6 rounded-2xl bg-white">
        {!showResult ? (
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {patterns[current].question}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {patterns[current].options.map((option, index) => (
                <button
                  key={index}
                  className={`text-xl py-6 transition-all duration-300 ease-in-out rounded-xl border-2 w-full
                    ${
                      selected === index
                        ? index === patterns[current].correct
                          ? "bg-green-200 border-green-600"
                          : "bg-red-200 border-red-600"
                        : "bg-white hover:bg-blue-100 border-gray-300"
                    }`}
                  onClick={() => handleOptionClick(index)}
                  disabled={selected !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Question {current + 1} of {patterns.length}
            </p>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-purple-800">
              🎉 Great job!
            </h2>
            <p className="text-xl text-gray-700">
              You scored {score} out of {patterns.length}
            </p>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-6 py-2 rounded-xl"
              onClick={handleRestart}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatternRecognitionGame;
