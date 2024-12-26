// src/components/WordSearchGame.js
import React, { useState } from "react";
import "../index.css";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const levels = [
  {
    category: "Fruits",
    words: ["CIDER", "PEAR", "APPLE"],
    grid: [
      ["X", "Y", "Z", "A", "L"],
      ["A", "P", "P", "L", "E"],
      ["P", "E", "E", "R", "N"],
      ["Q", "W", "E", "A", "R"],
      ["C", "I", "D", "E", "R"],
    ],
  },
  {
    category: "Cars",
    words: ["BMW", "TESLA", "HONDA"],
    grid: [
      ["B", "M", "W", "A", "C"],
      ["T", "E", "S", "L", "A"],
      ["H", "O", "N", "D", "A"],
      ["X", "Y", "Z", "K", "L"],
      ["Q", "W", "E", "R", "T"],
    ],
  },
];

const clickSound = new Audio("/sounds/click.wav");
const errorSound = new Audio("/sounds/error.wav");
const successSound = new Audio("/sounds/success.wav");
const levelUpSound = new Audio("/sounds/levelup.wav");

const WordSearchGame = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [foundWords, setFoundWords] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);

  const { category, words, grid } = levels[currentLevel];

  const getNeighbors = (row, col) => {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],         [0, 1],
      [1, -1], [1, 0], [1, 1],
    ];
    return directions.map(([dx, dy]) => [row + dx, col + dy])
      .filter(([r, c]) => r >= 0 && c >= 0 && r < grid.length && c < grid[0].length);
  };

  const handleLetterClick = (rowIndex, colIndex) => {
    clickSound.play();

    if (selectedLetters.length > 0) {
      const lastSelection = selectedLetters[selectedLetters.length - 1];
      const neighbors = getNeighbors(lastSelection.row, lastSelection.col);
      const isNeighbor = neighbors.some(([r, c]) => r === rowIndex && c === colIndex);
      if (!isNeighbor) {
        errorSound.play();
        setSelectedLetters([]); // Reset selection if invalid move
        return;
      }
    }

    const newSelection = [...selectedLetters, { row: rowIndex, col: colIndex, letter: grid[rowIndex][colIndex] }];
    setSelectedLetters(newSelection);

    const formedWord = newSelection.map(({ letter }) => letter).join("");

    if (words.includes(formedWord) && !foundWords.includes(formedWord)) {
      successSound.play();
      setFoundWords([...foundWords, formedWord]);
      setSelectedLetters([]); // Clear selection after a word is found
    } else if (!words.some((word) => word.startsWith(formedWord))) {
      errorSound.play();
      setSelectedLetters([]); // Reset selection if the formed word is invalid
    }
  };

  const isLevelComplete = foundWords.length === words.length;

  const nextLevel = () => {
    if (currentLevel < levels.length - 1) {
      levelUpSound.play();
      setCurrentLevel(currentLevel + 1);
      setFoundWords([]);
      setSelectedLetters([]);
    }
  };

  const isSelected = (row, col) => {
    return selectedLetters.some((sel) => sel.row === row && sel.col === col);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-beige flex flex-col items-center justify-center">
      
      <h1 className="text-4xl font-bold mb-6 font-atma">Word Search Game</h1>

      <div className="bg-blue-100    p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl text-red-400 font-semibold mb-4">Level {currentLevel + 1}: {category}</h2>
        <p className="mb-4">Find the following words:</p>

        <ul className="flex flex-wrap gap-2 font-atma text-white  mb-4">
          {words.map((word) => (
            <li
              key={word}
              className={`font-semibold px-2 py-0.5 text-sm bg-green-400 rounded-full ${
                foundWords.includes(word) ? "text-green-500 line-through" : ""
              }`}
            >
              {word}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-5 gap-2 mb-4">
          {grid.map((row, rowIndex) =>
            row.map((letter, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleLetterClick(rowIndex, colIndex)}
                className={`w-12 h-12 flex items-center justify-center font-bold text-lg border border-gray-300 cursor-pointer ${
                  isSelected(rowIndex, colIndex) ? "bg-yellow-300" : "bg-gray-200"
                }`}
              >
                {letter}
              </div>
            ))
          )}
        </div>

        {isLevelComplete && (
          <button
            onClick={nextLevel}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-700"
          >
            Next Level
          </button>
        )}

        {currentLevel === levels.length - 1 && isLevelComplete && (
          <p className="mt-4 text-green-600 font-bold">Congratulations! You completed all levels!</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default WordSearchGame;
