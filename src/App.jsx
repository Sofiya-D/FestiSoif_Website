import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SeConnecterPage from "./pages/SeConnecterPage";
import BottomBar from "./components/bar/BottomBar";
import SignupPage from "./pages/SignupPage";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";


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
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/login" element={<LoginPage />} />

        {console.log(pathname)}
        </Routes>
      </div>
      { !paths.includes(pathname) &&
        <BottomBar />
      }
    </BrowserRouter>
  );
}