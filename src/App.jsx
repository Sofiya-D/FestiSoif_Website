import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BottomBar from "./components/bar/BottomBar";
import DetailsPage from "./pages/DetailsPage";


export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-row h-screen w-screen">
        <div className="h-[90%] w-full bg-gray-50 text-gray-800">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details" element={<DetailsPage />} />
          </Routes>
        </div>
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}