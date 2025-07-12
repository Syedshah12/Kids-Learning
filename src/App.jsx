
// import  {Home}  from "./pages/Home.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import ScrollToTop from "./components/ScrollToTop.jsx";
// import SignUppage from "./pages/SignUppage .jsx";
// import ProblemSolvingChallenges from "./pages/ProblemSolvingChallenges.jsx";
// import Games from "./pages/Games.jsx";
// import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
// import WordSearchGame from "./components/WordSearchGame.jsx";
// import EducationPage from "./pages/EducationPage.jsx";
// import PatternRecognitionGame from "./components/PatternRecognitionGame.jsx";
// import CriticalThinkingQuiz from "./pages/CriticalThinkingQuiz.jsxCriticalThinkingQuiz.jsx";
// import CognitiveSkills from "./pages/CognitiveSkills.jsx";
// import CreativityBoosters from "./pages/CreativityBooster.jsx";
// import StoryReader from "./components/StoryReader.jsx";
// import BrainExercisePage from "./pages/BrainExercisePage.jsx";
// import VerbalReasoningQuiz from "./components/VerbalReasoningQuiz.jsx";
// import NonVerbalReasoningQuiz from "./components/NonVerbalReasoningQuiz.jsx";
// export default function App() {


//   const routes = [
//     { path: "/", element: <Home/>},
//     { path: "/cognitive-skills", element: <CognitiveSkills/>},
//     { path: "/critical-thinking", element: <CriticalThinkingQuiz/>},
//     { path: "/creativity-boosters", element: <CreativityBoosters/>},
//     { path: "/login", element: <LoginPage /> },
//     { path: "/register", element: <SignUppage /> },
//     { path: "/games", element: <Games /> },
//     { path: "/wordgame", element: <WordSearchGame /> },
//     { path: "/patternGame", element: <PatternRecognitionGame /> },
//     { path: "/education", element: <EducationPage /> },
//     { path: "/brain", element: <BrainExercisePage /> },
//     { path: "/brain/verbal-quiz", element: <VerbalReasoningQuiz /> },
//     { path: "/brain/non-verbal-quiz", element: <NonVerbalReasoningQuiz /> },
//     { path: "/story/:id", element: <StoryReader /> },

//   ];


//   return (
//     <>
//      <ScrollToTop />
//     <Routes>
//     {routes.map((route, index) => (
//       <Route
//         key={index}
//         path={route.path}
//         element={
          
//             route.element
          
//         }
//       />
    
//     ))}
//   </Routes>
//     </>
//   )
// }

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SignUppage from "./pages/SignUppage.jsx";
import ProblemSolvingChallenges from "./pages/ProblemSolvingChallenges.jsx";
import Games from "./pages/Games.jsx";
import WordSearchGame from "./components/WordSearchGame.jsx";
import EducationPage from "./pages/EducationPage.jsx";
import PatternRecognitionGame from "./components/PatternRecognitionGame.jsx";
import CriticalThinkingQuiz from "./pages/CriticalThinkingQuiz.jsx";
import CognitiveSkills from "./pages/CognitiveSkills.jsx";
import CreativityBoosters from "./pages/CreativityBooster.jsx";
import StoryReader from "./components/StoryReader.jsx";
import BrainExercisePage from "./pages/BrainExercisePage.jsx";
import VerbalReasoningQuiz from "./components/VerbalReasoningQuiz.jsx";
import NonVerbalReasoningQuiz from "./components/NonVerbalReasoningQuiz.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUppage />} />

        {/* Protected routes */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/cognitive-skills" element={<ProtectedRoute><CognitiveSkills /></ProtectedRoute>} />
        <Route path="/critical-thinking" element={<ProtectedRoute><CriticalThinkingQuiz /></ProtectedRoute>} />
        <Route path="/creativity-boosters" element={<ProtectedRoute><CreativityBoosters /></ProtectedRoute>} />
        <Route path="/games" element={<ProtectedRoute><Games /></ProtectedRoute>} />
        <Route path="/wordgame" element={<ProtectedRoute><WordSearchGame /></ProtectedRoute>} />
        <Route path="/patternGame" element={<ProtectedRoute><PatternRecognitionGame /></ProtectedRoute>} />
        <Route path="/education" element={<ProtectedRoute><EducationPage /></ProtectedRoute>} />
        <Route path="/brain" element={<ProtectedRoute><BrainExercisePage /></ProtectedRoute>} />
        <Route path="/brain/verbal-quiz" element={<ProtectedRoute><VerbalReasoningQuiz /></ProtectedRoute>} />
        <Route path="/brain/non-verbal-quiz" element={<ProtectedRoute><NonVerbalReasoningQuiz /></ProtectedRoute>} />
        <Route path="/story/:id" element={<ProtectedRoute><StoryReader /></ProtectedRoute>} />
      </Routes>
    </>
  );
}
