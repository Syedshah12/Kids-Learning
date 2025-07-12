import { useState } from "react";

const quiz = [
  {
    question: "What comes next? 2, 4, 6, __",
    options: ["7", "8", "10"],
    answer: "8",
  },
  {
    question: "Which is different? 🐶 🐱 🐔 🐟",
    options: ["🐶", "🐱", "🐔", "🐟"],
    answer: "🐔",
  },
];

export default function CriticalThinkingQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleOptionClick = (option) => {
    if (option === quiz[current].answer) {
      setScore((s) => s + 1);
    }

    if (current + 1 < quiz.length) {
      setCurrent(current + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-purple-600">
        🎯 Critical Thinking Quiz
      </h1>

      {!completed ? (
        <div className="mt-8 bg-pink-100 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-medium mb-4">
            {quiz[current].question}
          </h2>
          <div className="space-y-3">
            {quiz[current].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleOptionClick(opt)}
                className="w-full px-4 py-2 rounded-lg border border-pink-300 bg-white hover:bg-pink-200 transition"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8 text-center bg-green-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">🎉 Quiz Completed!</h2>
          <p className="text-lg mt-2">
            Your Score: <span className="font-bold">{score}</span> / {quiz.length}
          </p>
          <p className="text-2xl mt-4">
            {score === quiz.length ? "🌟 Great job!" : "👍 Keep Practicing!"}
          </p>
        </div>
      )}
    </div>
  );
}
