import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import SpecialtyPage from "./Pages/SpecialtyPage/SpecialtyPage";
import UniversityPage from "./Pages/UniversityPage/UniversityPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="specialty" element={<SpecialtyPage />} />
        <Route path="university" element={<UniversityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
