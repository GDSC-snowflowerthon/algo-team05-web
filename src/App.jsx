import { Route, Routes } from "react-router-dom";
import TestPage from "./pages/test/TestPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
