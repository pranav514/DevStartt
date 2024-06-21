// import React from 'react';
// import { Link } from 'react-router-dom'; // Import only if using React Router

// const Home: React.FC = () => {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
//       {/* Hero Section */}
//       <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Kickstart Your Development Journey</h1>
//         <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
//           Get a head start on your projects with the best practices, folder structures, and essential libraries tailored for beginner developers.
//         </p>
//         <Link to="/get-started">
//           <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
//             Get Started
//           </button>
//         </Link>
//       </main>

//       {/* Feature Section */}
//       <section className="w-full py-16 bg-gray-800">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
//           <FeatureCard
//             title="Optimal Structures"
//             description="Explore the best folder structures for different types of projects."
//           />
//           <FeatureCard
//             title="Recommended Libraries"
//             description="Learn about the libraries that will make your development faster and more efficient."
//           />
//           <FeatureCard
//             title="Best Practices"
//             description="Understand the best practices for writing clean, maintainable code."
//           />
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="w-full py-4 bg-gray-900 text-center">
//         <p>&copy; 2024 DevStart. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// type FeatureCardProps = {
//   title: string;
//   description: string;
// };

// const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
//   return (
//     <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
//       <h2 className="text-xl font-semibold mb-2">{title}</h2>
//       <p>{description}</p>
//     </div>
//   );
// };

// export default Home;
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
        <Link to="/get-started">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </Link>
      </main>

      {/* Feature Section */}
      <section className="w-full py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <Link to={"/get-started"}> 
          <FeatureCard
            title="Optimal Structures"
            description="Explore the best folder structures for different types of projects."
          />
          </Link>
          <Link to={"/libraries"}>
          <FeatureCard
            title="Recommended Libraries"
            description="Learn about the libraries that will make your development faster and more efficient."
          />
          </Link>
         <Link to={"/best-practices"}>
         <FeatureCard
            title="Best Practices"
            description="Understand the best practices for writing clean, maintainable code."
          />
         </Link>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-900 text-center">
        <p>&copy; 2024 DevStart. All rights reserved.</p>
      </footer>
    </div>
  );
};

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Home;
