import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SeConnecterPage from "./pages/SeConnecterPage";
import BottomBar from "./components/bar/BottomBar";
import SignupPage from "./pages/SignupPage";
import DetailsPage from "./pages/DetailsPage";


export default function App() {
  const url = window.location.href;
  const pathname = url.split("/")[3];
  const paths = ["seconnecter", "signup"];

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/seconnecter" element={<SeConnecterPage />} />
          <Route path="/signup" element={<SignupPage />} />
        {console.log(pathname)}
        </Routes>
      </div>
      { !paths.includes(pathname) &&
        <BottomBar />
      }
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