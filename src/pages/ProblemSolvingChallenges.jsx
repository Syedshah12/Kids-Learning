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

export default function ProblemSolvingChallenges() {
  const [selected, setSelected] = useState({});
  const [showAnswer, setShowAnswer] = useState({});

  const handleAnswer = (id, option) => {
    setSelected((prev) => ({ ...prev, [id]: option }));
    setShowAnswer((prev) => ({ ...prev, [id]: true }));
  };

  return (


   <div>
 
<Navbar/>
 <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        🧠 Problem-Solving Challenges
      </h1>

      {challenges.map((c) => (
        <div key={c.id} className="bg-yellow-100 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">{c.question}</h2>
          <div className="space-y-3">
            {c.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(c.id, opt)}
                disabled={showAnswer[c.id]}
                className={`w-full text-left px-4 py-2 rounded-lg border transition
                  ${
                    selected[c.id] === opt
                      ? opt === c.answer
                        ? "bg-green-300 border-green-600"
                        : "bg-red-300 border-red-600"
                      : "bg-white hover:bg-yellow-200 border-yellow-400"
                  }`}
              >
                {opt}
              </button>
            ))}
            {showAnswer[c.id] && (
              <p className="mt-2 text-sm text-gray-700">
                ✅ Correct Answer: <strong>{c.answer}</strong>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>

{/* footer */}
<div>
<Footer/>
</div>

    </div>





   
  );
}
