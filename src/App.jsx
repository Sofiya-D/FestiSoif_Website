import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BottomBar from "./components/bar/BottomBar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <BottomBar />
    </BrowserRouter>
  );
}