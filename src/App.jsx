
import  {Home}  from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SignUppage from "./pages/SignUppage .jsx";
import ProblemSolvingChallenges from "./pages/ProblemSolvingChallenges.jsx";
import Games from "./pages/Games.jsx";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import WordSearchGame from "./components/WordSearchGame.jsx";
import EducationPage from "./pages/EducationPage.jsx";
import PatternRecognitionGame from "./components/PatternRecognitionGame.jsx";
import CriticalThinkingQuiz from "./pages/CriticalThinkingQuiz.jsxCriticalThinkingQuiz.jsx";
import CognitiveSkills from "./pages/CognitiveSkills.jsx";
import CreativityBoosters from "./pages/CreativityBooster.jsx";
import StoryReader from "./components/StoryReader.jsx";
import BrainExercisePage from "./pages/BrainExercisePage.jsx";
import VerbalReasoningQuiz from "./components/VerbalReasoningQuiz.jsx";
import NonVerbalReasoningQuiz from "./components/NonVerbalReasoningQuiz.jsx";
export default function App() {


  const routes = [
    { path: "/", element: <Home/>},
    { path: "/cognitive-skills", element: <CognitiveSkills/>},
    { path: "/critical-thinking", element: <CriticalThinkingQuiz/>},
    { path: "/creativity-boosters", element: <CreativityBoosters/>},
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <SignUppage /> },
    { path: "/games", element: <Games /> },
    { path: "/wordgame", element: <WordSearchGame /> },
    { path: "/patternGame", element: <PatternRecognitionGame /> },
    { path: "/education", element: <EducationPage /> },
    { path: "/brain", element: <BrainExercisePage /> },
    { path: "/brain/verbal-quiz", element: <VerbalReasoningQuiz /> },
    { path: "/brain/non-verbal-quiz", element: <NonVerbalReasoningQuiz /> },
    { path: "/story/:id", element: <StoryReader /> },

  ];


  return (
    <>
     <ScrollToTop />
    <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={
          
            route.element
          
        }
      />
    
    ))}
  </Routes>
    </>
  )
}