import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-extrabold text-orange-500">404</h1>
      <p className="text-2xl md:text-3xl mt-4">Oops! Page not found.</p>
      <p className="text-gray-600 mt-2 mb-6 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Go Back Home
      </button>
    </div>
  );
}
