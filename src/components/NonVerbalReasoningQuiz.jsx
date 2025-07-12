import React, { useState } from "react";

const questions = [
  {
    question: "Which shape completes the pattern?",
    image: "https://img.icons8.com/ios-filled/500/000000/puzzle.png",
    options: [
      "https://img.icons8.com/emoji/96/red-circle-emoji.png",
      "https://img.icons8.com/emoji/96/blue-square-emoji.png",
      "https://img.icons8.com/emoji/96/red-triangle-pointed-up-emoji.png"
    ],
    answer: "https://img.icons8.com/emoji/96/red-triangle-pointed-up-emoji.png"
  },
  {
    question: "Which one is different?",
    image: "https://img.icons8.com/ios/500/geometric-shapes.png",
    options: [
      "https://img.icons8.com/color/96/star.png",
      "https://img.icons8.com/color/96/star--v1.png",
      "https://img.icons8.com/color/96/square.png"
    ],
    answer: "https://img.icons8.com/color/96/square.png"
  }
];

const NonVerbalReasoningQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleAnswer = (option) => {
    setSelected(option);
    const isCorrect = option === questions[current].answer;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Oops! That's not correct.");
    }
    setTimeout(() => {
      setFeedback("");
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        alert(`🎉 Quiz finished! Your score: ${score + (isCorrect ? 1 : 0)} / ${questions.length}`);
        setCurrent(0);
        setSelected(null);
        setScore(0);
      }
    }, 1000);
  };

  const q = questions[current];

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-pink-700 mb-4">🧩 Non-Verbal Reasoning Quiz</h1>
      <p className="text-lg text-gray-800 mb-2">{q.question}</p>
      <img src={q.image} alt="question" className="mb-6 w-64 h-auto rounded-lg shadow" />

      <div className="grid grid-cols-3 gap-4">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt)}
            className={`rounded-lg border-4 p-1 transition-all duration-300 ${
              selected === opt
                ? opt === q.answer
                  ? "border-green-400"
                  : "border-red-400"
                : "border-transparent hover:border-blue-300"
            }`}
          >
            <img src={opt} alt={`option-${i}`} className="w-20 h-20 object-contain" />
          </button>
        ))}
      </div>

      {feedback && <p className="mt-4 text-lg font-semibold text-gray-800">{feedback}</p>}
      <p className="mt-6 text-gray-700">Score: {score}</p>
    </div>
  );
};

export default NonVerbalReasoningQuiz;