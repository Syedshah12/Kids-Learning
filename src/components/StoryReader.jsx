import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { storyExplorer } from "../pages/EducationPage"; // adjust path as needed

const StoryReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const story = storyExplorer.find((s) => s.id === id);
  const [page, setPage] = React.useState(0);

  if (!story) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl">Story not found</p>
      </div>
    );
  }

  const nextPage = () => {
    if (page < story.pages.length - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-indigo-100 flex flex-col items-center py-12 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
      >
        ⬅ Back
      </button>

      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        {story.title}
      </h1>

      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full text-lg leading-relaxed text-gray-800 font-serif transition duration-500 ease-in-out">
        <p className="text-center">{story.pages[page]}</p>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={prevPage}
          disabled={page === 0}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        >
          ◀ Prev
        </button>
        <button
          onClick={nextPage}
          disabled={page === story.pages.length - 1}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        >
          Next ▶
        </button>
      </div>

      <p className="mt-4 text-gray-600">
        Page {page + 1} of {story.pages.length}
      </p>
    </div>
  );
};

export default StoryReader;
