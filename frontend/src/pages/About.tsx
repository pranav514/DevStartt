import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-red-500">About Our Project</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Discover the story behind our project, our core values, and what we aim to achieve.
        </p>
      </header>

      <section className="bg-gray-800 p-8 rounded-lg shadow-2xl border border-red-600 w-full max-w-4xl space-y-6">
        {/* Project Purpose Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-red-400">Our Purpose</h2>
          <p className="mt-4 text-gray-300">
            Our project is designed to empower developers by providing a comprehensive toolkit and resources that streamline project management and development workflows. We aim to foster a community where developers can collaborate, innovate, and grow together.
          </p>
        </div>

        {/* Features Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-red-400">Key Features</h2>
          <div className="mt-4 text-gray-300 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Comprehensive Resources</h3>
              <p>Access a wide range of tutorials, best practices, and tools tailored to various project needs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Community Collaboration</h3>
              <p>Join a vibrant community of developers where you can share ideas, get feedback, and collaborate on projects.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Innovative Solutions</h3>
              <p>Stay ahead with cutting-edge technologies and frameworks that help you build and maintain your projects efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-12">
        <Link to="/" className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md text-white transition-all duration-300">
          Back to Home
        </Link>
      </footer>
    </div>
  );
};

export default About;
