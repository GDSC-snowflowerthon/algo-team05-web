import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home/Home";
import TestPage from "@/pages/test/TestPage";
import ClickContent from "@/pages/click-content/ClickContent";
import Navigation from "@/components/Navigation";
import SelectMap from "@/pages/map/SelectMap";
import Shelter from "@/pages/shelter/Shelter";
import StartPage from "@/pages/start/StartPage";
import QuizPage from "@/pages/quiz/quizpage";
import LoginPage from "@/pages/login/Loginpage";
import MsgRecordPage from "@/pages/record/MsgRecord";
import RegisterPage from "@/pages/register/RegisterPage";
import { requestPermission } from "./firebase-massaging.js";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    /* 권한 요청 부분 */
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          /* 권한을 요청받고 nofi를 생성해주는 부분 */
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      /* 권한이 있을때 바로 noti 생성해주는 부분 */
      new Notification(title, options);
    }
  };
  return fireNotif;
};

function App() {
  const triggerNotif = useNotification("Test Noti", {
    body: "notification body test",
  });

  useEffect(() => {
    // 컴포넌트가 마운트될 때 한 번만 호출
    requestPermission();
  }, []);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/message-content" element={<ClickContent />} />
        <Route path="/map" element={<SelectMap />} />
        <Route path="/shelter-list" element={<Shelter />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/record" element={<MsgRecordPage />} />
      </Routes>
      <button onClick={triggerNotif}>클릭</button>
    </>
  );
}

export default App;
