import React from "react";
import verbal from '/images/verbal.jfif'
import nonVerbal from '/images/non.png'

const dailyChallenges = [
  {
    title: "Verbal Reasoning Quiz",
    description: "Practice fun word problems and logic puzzles designed for kids!",
    image: `${verbal}`,
    link: "/brain/verbal-quiz"
  },
  {
    title: "Non-Verbal Reasoning Quiz",
    description: "Boost pattern recognition and visual thinking with image-based questions.",
 image: `${nonVerbal}`,
    link: "/brain/non-verbal-quiz"
  }
];

const BrainExercisePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-cyan-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      <h1 className="text-4xl font-bold text-center text-indigo-700">
        🧠 Brain Exercise Programs
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
        Explore kid-friendly reasoning challenges designed to improve logic, thinking, and pattern recognition skills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {dailyChallenges.map((challenge, index) => (
          <a href={challenge.link} key={index} className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src={challenge.image}
              alt={challenge.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                {challenge.title}
              </h2>
              <p className="text-gray-700">{challenge.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BrainExercisePage;