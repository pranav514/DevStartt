import React from 'react';
import { Link } from 'react-router-dom'; // Import only if using React Router

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Kickstart Your Development Journey
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Get a head start on your projects with the best practices, folder
          structures, and essential libraries tailored for beginner developers.
        </p>
        <div className="flex space-x-4">
          <Link to="/get-started">
            <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              Get Started
            </button>
          </Link>
          <Link to="/yt-tutorial">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              Tutorial to Watch
            </button>
          </Link>
        </div>
      </main>

      {/* Feature Section */}
      <section className="w-full py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <Link to={"/get-started"}>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-semibold mb-2">Optimal Structures</h2>
              <p>Explore the best folder structures for different types of projects.</p>
            </div>
          </Link>
          <Link to={"/libraries"}>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-semibold mb-2">Recommended Libraries</h2>
              <p>Learn about the libraries that will make your development faster and more efficient.</p>
            </div>
          </Link>
          <Link to={"/best-practices"}>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-semibold mb-2">Best Practices</h2>
              <p>Understand the best practices for writing clean, maintainable code.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-900 text-center">
        <p>&copy; 2024 DevStartt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
