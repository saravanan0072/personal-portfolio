import { Link } from "react-router-dom";

export default function Missing() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white text-center p-6">
      <h1 className="text-9xl font-bold drop-shadow-lg">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-lg opacity-80">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-2xl bg-white text-blue-600 font-semibold shadow-lg hover:scale-105 hover:bg-gray-100 transition-transform duration-200"
      >
        Go Home
      </Link>
    </section>
  );
}
