import { Route, Routes } from "react-router-dom";
import TestPage from "@/pages/test/TestPage";
import ClickContent from "@/pages/click-content/ClickContent";
import Navigation from "@/components/Navigation";
import SelectMap from "@/pages/map/SelectMap";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/message-content" element={<ClickContent />} />
        <Route path="/map" element={<SelectMap />} />
      </Routes>
    </>
  );
}

export default App;
