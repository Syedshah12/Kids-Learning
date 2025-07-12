import React, { useState } from "react";

const questions = [
  {
    question: "Which word is the odd one out?",
    options: ["Apple", "Banana", "Carrot", "Mango"],
    answer: "Carrot"
  },
  {
    question: "What comes next: Cat, Dog, Cow, ___?",
    options: ["Pig", "Sheep", "Horse", "Duck"],
    answer: "Sheep"
  },
  {
    question: "Choose the opposite of: Happy",
    options: ["Glad", "Joyful", "Sad", "Excited"],
    answer: "Sad"
  },
  {
    question: "Which word is a noun?",
    options: ["Run", "Blue", "Chair", "Quickly"],
    answer: "Chair"
  },
  {
    question: "Which word rhymes with 'ball'?",
    options: ["Tall", "Bell", "Book", "Pull"],
    answer: "Tall"
  },
  {
    question: "Which one is a verb?",
    options: ["Jump", "Rabbit", "Red", "Tree"],
    answer: "Jump"
  },
  {
    question: "Find the plural word:",
    options: ["Dog", "Book", "Cats", "Fish"],
    answer: "Cats"
  },
  {
    question: "What is the opposite of 'cold'?",
    options: ["Hot", "Snow", "Ice", "Freeze"],
    answer: "Hot"
  },
  {
    question: "Which word is a color?",
    options: ["Green", "Chair", "Run", "Jump"],
    answer: "Green"
  },
  {
    question: "Which one is not like the others?",
    options: ["Triangle", "Circle", "Square", "Banana"],
    answer: "Banana"
  }
];

const VerbalReasoningQuiz = () => {
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
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-yellow-700 mb-6">🗣️ Verbal Reasoning Quiz</h1>
      <p className="text-xl text-gray-800 mb-4">{q.question}</p>
      <div className="grid grid-cols-2 gap-4">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt)}
            className={`px-6 py-3 text-lg rounded-xl shadow-md bg-white hover:bg-yellow-100 transition ${
              selected === opt
                ? opt === q.answer
                  ? "bg-green-200"
                  : "bg-red-200"
                : ""
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {feedback && <p className="mt-4 text-lg font-semibold text-gray-800">{feedback}</p>}
      <p className="mt-6 text-gray-700">Score: {score}</p>
    </div>
  );
};

export default VerbalReasoningQuiz;
