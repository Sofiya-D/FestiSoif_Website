import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SeConnecterPage from "./pages/SeConnecterPage";
import BottomBar from "./components/bar/BottomBar";
import SignupPage from "./pages/SignupPage";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import PhoneRA from "./pages/PhoneRA";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import SplashScreen from "./pages/SplashScreen";

export default function App() {
  const url = window.location.href;
  const pathname = url.split("/")[3];
  const paths = ["seconnecter", "signup"];

  return (
    <BrowserRouter>
      <div className="flex flex-row h-screen w-screen">
        <div className="h-[90%] w-full bg-gray-50 text-gray-800">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/seconnecter" element={<SeConnecterPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/phonera/:id" element={<PhoneRA />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/splash" element={<SplashScreen />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/oups" element={<ContentMissingPage />} />
          </Routes>
        </div>
        { !paths.includes(pathname) &&
          <BottomBar />
        }
      </div>
    </BrowserRouter>
  );
}