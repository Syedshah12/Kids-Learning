import React from "react";
import rocket from '/stories/rocket.jfif'
import garden from '/stories/garden.jfif'
import bunny from '/stories/bunny.jfif'
import antAudio from '/stories/ant.wav'
import pigsAudio from '/stories/pigs.mp3'
const categories = [
  {
    title: "Fun Facts",
    description: "Explore fascinating facts across science, history, animals, and more!",
    items: [
      "Octopuses have three hearts!",
      "The Great Wall of China is over 13,000 miles long.",
      "Elephants can recognize themselves in a mirror.",
    ],
  },
  {
    title: "Stories and Rhymes",
    description: "Engaging short stories and poems for curious young minds.",
    items: [
      "The Lion and the Mouse",
      "Twinkle Twinkle Little Star",
      "The Tale of the Clever Crow",
    ],
  },
  {
    title: "Language Learning",
    description: "Build vocabulary and practice pronunciation with fun lessons!",
    items: [
      "Word of the Day: 'Gigantic' - meaning very big",
      "Rhyme: Cat - Hat - Bat - Mat",
      "Pronounce: Hippopotamus (hip·po·pot·a·mus)",
    ],
  },
];

const audioStories = [
  {
    title: "The Ant and the Grasshoper",
    audio: `${antAudio}`,
    subtitle: "It is summer in the park,colony of ants...",
  },
  {
    title: "The Three Pigs",
    audio: `${pigsAudio}`,
    subtitle: "The Three little pigs,The big Bad wolf....",
  },
];

const storyExplorer = [
  {
    id: "brave-little-bunny",
    title: "The Brave Little Bunny",
    description: "A story of courage, kindness, and friendship.",
      image: `${bunny}`,
    pages: [
      "In a peaceful meadow, surrounded by flowers and sunshine, lived a small bunny named Benny. Benny was not the biggest or the fastest, but he was known throughout the meadow for his kind heart.",
      "One morning, Benny heard a rustling in the grass and discovered a baby bird that had fallen from its nest. The poor thing looked frightened and couldn’t fly. Without hesitation, Benny gently picked it up and promised to help.",
      "He asked the wise old owl for advice, who guided him to build a soft nest using leaves and moss at the base of the tree. Benny kept the bird warm, fed it berries, and protected it from the wind and rain.",
      "Days passed, and the little bird grew stronger. With Benny's encouragement, it began to flutter its wings. One sunny day, the bird finally soared into the sky, circling above Benny as a thank you.",
      "From that day on, the bunny and bird were best friends. Benny had shown everyone that true bravery comes from compassion, and the meadow was never the same — it was full of love and friendship."
    ]
  },
  {
    id: "magic-garden",
    title: "Magic in the Garden",
    description: "Discover the tiny magical world under leaves.",
        image: `${garden}`,
    pages: [
      "Lily wandered into her grandmother's garden one summer afternoon. The warm sun kissed the leaves and the scent of blooming jasmine filled the air. Her curiosity led her beyond the flower beds to a hidden corner she'd never noticed before.",
      "There, under a canopy of thick ferns, she spotted tiny sparkling trails. They shimmered and moved, inviting her to follow. As she pushed the leaves aside, she gasped at what she saw next.",
      "Beneath the leaves was a secret world of tiny fairies fluttering about. They danced around colorful mushrooms and glimmering dewdrops, laughing and singing in soft, bell-like voices.",
      "One of the fairies noticed Lily and flew over with a warm smile. 'Welcome to our garden festival,' she said. They invited Lily to join their celebration, and she spent what felt like hours dancing, laughing, and learning about their tiny magical world.",
      "When Lily finally returned, the sun was setting. Though it felt like a dream, a single sparkling petal in her hand reminded her it was all real. The garden had become her secret haven, where magic lived just beneath the leaves."
    ]
  },
  {
    id: "rocket-to-moon",
    title: "Rocket to the Moon",
    description: "A bedtime adventure through space!",
  
           image: `${rocket}`,
    pages: [
      "As the stars twinkled outside his window, young Tommy tucked himself into bed, clutching his toy rocket. He closed his eyes and imagined himself aboard a spaceship.",
      "The countdown began: 3… 2… 1… Blast off! Tommy’s rocket soared through the night sky, past the shimmering stars and colorful planets. He waved at Saturn's rings and giggled at the floating comets.",
      "He landed gently on the moon where the ground was soft and dusty. Tommy jumped high in the air, amazed at the feeling of weightlessness. He planted a flag with his name and looked at the glowing Earth from afar.",
      "Tommy met moon creatures who invited him to a glowing moon-dance. They bounced and laughed together under the crater lights until it was time to leave.",
      "As the rocket brought him back home, Tommy smiled in his sleep. His dream journey reminded him that imagination could take him anywhere — even to the stars and back."
    ]
  }
];

const mathQuestions = [
  {
    question: "How many apples do you see?",
    image: "🍎🍎🍎🍎",
    answer: 4,
  },
  {
    question: "2 + 3 equals?",
    image: "🟢🟢 + 🟡🟡🟡",
    answer: 5,
  },
];

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      <h1 className="text-4xl font-bold text-center text-purple-700">
        Educational Resources
      </h1>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              {category.title}
            </h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {category.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Audio Stories */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          🎵 Audio Stories and Rhymes
        </h2>
        <div className="space-y-8">
          {audioStories.map((story, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {story.title}
              </h3>
              <audio controls className="w-full mb-2">
                <source src={story.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-gray-600 italic">{story.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story Explorer Carousel */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">
          📚 Story Explorer
        </h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {storyExplorer.map((story, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white rounded-2xl shadow-lg p-4 flex-shrink-0"
            >
              <a href={`/story/${story.id}`}>
                <img
                  src={story.image}
                  alt={story.title}
                  className="rounded-xl h-40 w-full object-cover mb-3 hover:opacity-90 transition"
                />
              </a>
              <a href={`/story/${story.id}`} className="text-lg font-bold text-purple-600 hover:underline">
                {story.title}
              </a>
              <p className="text-gray-600 text-sm">{story.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Math Fun */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          🧮 Math Fun
        </h2>
        <div className="grid gap-6">
          {mathQuestions.map((q, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md space-y-3 text-center"
            >
              <p className="text-lg font-semibold text-gray-800">
                {q.question}
              </p>
              <div className="text-3xl">{q.image}</div>
              <p className="text-gray-500">Answer: {q.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export { storyExplorer };
export default EducationPage;



