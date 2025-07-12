import React, { useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { Howl } from "howler";
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
const CreativityBoosters = () => {
  const [brushColor, setBrushColor] = useState("#000000");
  const [brushRadius, setBrushRadius] = useState(3);
  const [canvasRef, setCanvasRef] = useState(null);

  const playNote = (note) => {
    const sound = new Howl({
      src: [`/sounds/piano/${note}.mp3`],
    });
    sound.play();
  };

  return (
   <div>
    <Navbar/>
     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-700">
        🎨 Creativity Boosters
      </h1>

      {/* Drawing Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Drawing and Coloring
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-4">
            <label className="font-medium">Brush Color:</label>
            <input
              type="color"
              value={brushColor}
              onChange={(e) => setBrushColor(e.target.value)}
              className="w-16 h-10 border rounded"
            />
            <label className="font-medium">Brush Size:</label>
            <input
              type="range"
              min="1"
              max="20"
              value={brushRadius}
              onChange={(e) => setBrushRadius(Number(e.target.value))}
              className="w-40"
            />
            <button
              onClick={() => canvasRef.clear()}
              className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
            >
              Clear Canvas
            </button>
          </div>
          <CanvasDraw
            ref={(ref) => setCanvasRef(ref)}
            brushColor={brushColor}
            brushRadius={brushRadius}
            lazyRadius={0}
            canvasWidth={600}
            canvasHeight={400}
            className="border rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Music Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Music Creation
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'].map((note) => (
            <button
              key={note}
              onClick={() => playNote(note)}
              className="bg-green-200 hover:bg-green-300 text-lg font-semibold py-3 rounded shadow"
            >
              {note}
            </button>
          ))}
        </div>
      </div>
    </div>
    <div>
<Footer/>
</div>
   </div>
  );
};

export default CreativityBoosters;
