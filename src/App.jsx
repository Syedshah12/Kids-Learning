
import  {Home}  from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUppage from "./pages/SignUppage .jsx";
import Games from "./pages/Games.jsx";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import WordSearchGame from "./components/WordSearchGame.jsx";


export default function App() {


  const routes = [
    { path: "/", element: <Home/>},
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <SignUppage /> },
    { path: "/games", element: <Games /> },
    { path: "/wordgame", element: <WordSearchGame /> },

  ];


  return (
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
  )
}