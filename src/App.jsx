import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home/Home";
import TestPage from "@/pages/test/TestPage";
import ClickContent from "@/pages/click-content/ClickContent";
import SelectMap from "@/pages/map/SelectMap";
import Shelter from "@/pages/shelter/Shelter";
import StartPage from "@/pages/start/StartPage";
import QuizPage from "@/pages/quiz/quizpage";
import LoginPage from "@/pages/login/Loginpage";
import RegisterPage from "@/pages/register/RegisterPage";
import Record from "@/pages/record/Record.jsx";
import NotFound from "@/components/Error/NotFound.jsx";
import { requestPermission } from "./firebase-massaging.js";
//import'@/assets/fonts/Fonts.css'

function App() {
  useEffect(() => {
    // 컴포넌트가 마운트될 때 한 번만 호출
    requestPermission();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/message-content" element={<ClickContent />} />
        <Route path="/map" element={<SelectMap />} />
        <Route path="/shelter-list" element={<Shelter />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/record" element={<Record />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
