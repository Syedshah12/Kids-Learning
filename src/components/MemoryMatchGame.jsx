import React, { useState, useEffect } from "react";

// ✅ Custom shuffle function (no lodash needed)
const shuffle = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const cards = [
  "🐶", "🐱", "🐭", "🐹", "🐰", "🦊",
  "🐶", "🐱", "🐭", "🐹", "🐰", "🦊"
];

const MemoryMatchGame = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    setShuffledCards(shuffle(cards));
  }, []);

  const handleFlip = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (shuffledCards[first] === shuffledCards[second]) {
        setMatched([...matched, first, second]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">🧠 Memory Match</h1>
      <div className="grid grid-cols-4 gap-4">
        {shuffledCards.map((card, index) => (
          <div
            key={index}
            className={`w-20 h-20 text-3xl flex items-center justify-center rounded-xl shadow-md cursor-pointer transition-all duration-300 bg-white ${
              flipped.includes(index) || matched.includes(index) ? "" : "bg-indigo-200"
            }`}
            onClick={() => handleFlip(index)}
          >
            {flipped.includes(index) || matched.includes(index) ? card : "❓"}
          </div>
        ))}
      </div>
      {matched.length === cards.length && (
        <div className="mt-6 text-green-600 text-xl font-semibold">You matched all cards! 🎉</div>
      )}
    </div>
  );
};

export default MemoryMatchGame;
