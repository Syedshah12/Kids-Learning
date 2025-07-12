import { useState } from "react";
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
const challenges = [
  {
    id: 1,
    question: "A puppy is lost. What should you do?",
    options: ["Ignore it", "Help find the owner", "Take it home forever"],
    answer: "Help find the owner",
  },
  {
    id: 2,
    question: "You spilled water. What’s the best action?",
    options: ["Call mom", "Clean it up", "Blame someone"],
    answer: "Clean it up",
  },
];

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

export default function CognitiveSkills() {
  const [tab, setTab] = useState("problem");
  const [selected, setSelected] = useState({});
  const [showAnswer, setShowAnswer] = useState({});
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  const handleChallengeAnswer = (id, option) => {
    setSelected((prev) => ({ ...prev, [id]: option }));
    setShowAnswer((prev) => ({ ...prev, [id]: true }));
  };

  const handleQuizAnswer = (option) => {
    if (option === quiz[quizIndex].answer) {
      setScore(score + 1);
    }
    if (quizIndex + 1 < quiz.length) {
      setQuizIndex(quizIndex + 1);
    } else {
      setQuizDone(true);
    }
  };

  return (


 <div>
 
<Navbar/>
{/* hero section */}

    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="flex justify-center border-b">
          <button
            className={`w-1/2 p-4 font-semibold text-lg transition ${
              tab === "problem"
                ? "bg-blue-100 text-blue-700"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setTab("problem")}
          >
            🧠 Problem-Solving
          </button>
          <button
            className={`w-1/2 p-4 font-semibold text-lg transition ${
              tab === "quiz"
                ? "bg-purple-100 text-purple-700"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setTab("quiz")}
          >
            🎯 Critical Thinking
          </button>
        </div>

        <div className="p-6 space-y-6">
          {tab === "problem" && (
            <>
              <h2 className="text-2xl font-bold text-blue-600 text-center">
                Problem-Solving Challenges
              </h2>
              {challenges.map((c) => (
                <div
                  key={c.id}
                  className="bg-yellow-50 border border-yellow-300 p-5 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold mb-3">{c.question}</h3>
                  <div className="space-y-2">
                    {c.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleChallengeAnswer(c.id, opt)}
                        disabled={showAnswer[c.id]}
                        className={`w-full text-left px-4 py-2 rounded-md border transition
                          ${
                            selected[c.id] === opt
                              ? opt === c.answer
                                ? "bg-green-200 border-green-500"
                                : "bg-red-200 border-red-500"
                              : "bg-white hover:bg-yellow-100 border-yellow-400"
                          }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {showAnswer[c.id] && (
                    <p className="mt-2 text-sm text-gray-700">
                      ✅ Correct Answer: <strong>{c.answer}</strong>
                    </p>
                  )}
                </div>
              ))}
            </>
          )}

          {tab === "quiz" && (
            <>
              <h2 className="text-2xl font-bold text-purple-600 text-center">
                Critical Thinking Quiz
              </h2>
              {!quizDone ? (
                <div className="bg-pink-50 border border-pink-300 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">
                    {quiz[quizIndex].question}
                  </h3>
                  <div className="space-y-2">
                    {quiz[quizIndex].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleQuizAnswer(opt)}
                        className="w-full px-4 py-2 bg-white border border-pink-400 rounded-md hover:bg-pink-100 transition"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center bg-green-50 p-6 rounded-xl border border-green-300 shadow-sm">
                  <h3 className="text-xl font-bold">🎉 Quiz Completed!</h3>
                  <p className="mt-2 text-lg">
                    Your Score:{" "}
                    <span className="font-bold">
                      {score} / {quiz.length}
                    </span>
                  </p>
                  <p className="text-2xl mt-4">
                    {score === quiz.length ? "🌟 Excellent!" : "👍 Great Effort!"}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>

{/* footer */}
<div>
<Footer/>
</div>

    </div>








  );
}
