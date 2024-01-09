import { Route, Routes } from "react-router-dom";
import TestPage from "@/pages/test/TestPage";
import ClickContent from "@/pages/click-content/ClickContent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/message-content" element={<ClickContent />} />
      </Routes>
    </>
  );
}

export default App;
