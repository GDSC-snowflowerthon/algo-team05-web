import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import TestPage from "@/pages/test/TestPage";
import ClickContent from "@/pages/click-content/ClickContent";
import Navigation from "@/components/Navigation";
import SelectMap from "@/pages/map/SelectMap";
import Shelter from "@/pages/shelter/Shelter";
import { requestPermission } from "./firebase-massaging.js";

function App() {
  useEffect(() => {
    // 컴포넌트가 마운트될 때 한 번만 호출
    requestPermission();
  }, []);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/message-content" element={<ClickContent />} />
        <Route path="/map" element={<SelectMap />} />
        <Route path="/shelter-list" element={<Shelter />} />
      </Routes>
      <button>클릭</button>
    </>
  );
}

export default App;
