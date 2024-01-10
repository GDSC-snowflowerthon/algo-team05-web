import { Route, Routes } from "react-router-dom";
import TestPage from "@/pages/test/TestPage";
import ClickContent from "@/pages/click-content/ClickContent";
import Navigation from "@/components/Navigation";
import SelectMap from "@/pages/map/SelectMap";
import Shelter from "@/pages/shelter/Shelter";
import SelectBar from "./components/Setting/SelectBar";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/message-content" element={<ClickContent />} />
        <Route path="/map" element={<SelectMap />} />
        <Route path="/shelter-list" element={<Shelter />} />
        <Route path="/bar" element={<SelectBar />} />
      </Routes>
    </>
  );
}

export default App;
