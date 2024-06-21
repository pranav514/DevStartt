import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { bestPractices } from "../lib/FolderStructure";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BestPractices: React.FC = () => {
//   const navigate = useNavigate();
  const location = useLocation();
  const categoryQuery = new URLSearchParams(location.search).get("category") as keyof typeof bestPractices;
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof bestPractices | null>(categoryQuery);
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem("selectedCategory", selectedCategory);
    } else {
      localStorage.removeItem("selectedCategory");
    }
  }, [selectedCategory]);

  const handleCategoryChange = (value: keyof typeof bestPractices) => {
    setSelectedCategory(value);
  };

  const handleReset = () => {
    setSelectedCategory(null);
  };
  const handleViewLibraries = () => {
    if (selectedCategory) {
      navigate(`/libraries?category=${selectedCategory}`);
    } else {
      navigate('/libraries')
    }
  };
  const folderStruct = () => {
    if (selectedCategory) {
      navigate(`/get-started?category=${selectedCategory}`);
    } else {
      navigate('/get-started')
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 pt-20 px-4 text-white">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500">Best Practices</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Explore the best practices for your selected project category. Follow these guidelines to ensure optimal project development.
        </p>
      </header>
      
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-2xl border border-red-600 transition-all duration-300 ease-in-out hover:shadow-red-600">
        <Select value={selectedCategory || "Select a category"} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-full bg-gray-700 p-3 rounded-md border border-red-600 shadow-md text-white focus:ring-2 focus:ring-red-400">
            <SelectValue>{selectedCategory ? selectedCategory : "Select a category"}</SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-gray-700 border border-gray-600 shadow-lg rounded-md text-white">
            <SelectItem value="ecommerce" className="hover:bg-red-700 hover:text-white transition-all duration-300">E Commerce</SelectItem>
            <SelectItem value="blogs" className="hover:bg-red-700 hover:text-white transition-all duration-300">Blogs</SelectItem>
            <SelectItem value="contentManagement" className="hover:bg-red-700 hover:text-white transition-all duration-300">Content Management</SelectItem>
            <SelectItem value="portfolio" className="hover:bg-red-700 hover:text-white transition-all duration-300">Portfolio</SelectItem>
            <SelectItem value="socialMedia" className="hover:bg-red-700 hover:text-white transition-all duration-300">Social Media</SelectItem>
            <SelectItem value="elearning" className="hover:bg-red-700 hover:text-white transition-all duration-300">eLearning</SelectItem>
            <SelectItem value="mobileApp" className="hover:bg-red-700 hover:text-white transition-all duration-300">Mobile App (React Native)</SelectItem>
            <SelectItem value="staticSite" className="hover:bg-red-700 hover:text-white transition-all duration-300">Static Site</SelectItem>
            <SelectItem value="fullStackApp" className="hover:bg-red-700 hover:text-white transition-all duration-300">Full Stack App</SelectItem>
          </SelectContent>
        </Select>

        {selectedCategory && (
          <div className="mt-8 bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-red-400">Best Practices for {selectedCategory}</h2>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              {bestPractices[selectedCategory].map((practice, index) => (
                <li key={index} className="transition-all duration-300 ease-in-out hover:text-red-500">
                  {practice}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-8 flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
        <button
            onClick={handleReset}
            className="w-full md:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md text-white transition-all duration-300"
          >
            Reset
          </button>
          <button
            onClick={handleViewLibraries}
            className="w-full md:w-auto px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition-all duration-300"
          >
            View Optimal Libraries
          </button>
          <button
            onClick={folderStruct}
            className="w-full md:w-auto px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition-all duration-300"
          >
            View Folder Structure
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default BestPractices;
