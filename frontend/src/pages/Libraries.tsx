import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { folderStructures, recommendedLibraries } from "../lib/FolderStructure";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const Libraries: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof folderStructures | null>(
    searchParams.get("category") as keyof typeof folderStructures | null
  );
  const navigate = useNavigate();


  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem("selectedCategory", selectedCategory);
    } else {
      localStorage.removeItem("selectedCategory");
    }
  }, [selectedCategory]);

  const handleCategoryChange = (value: keyof typeof folderStructures) => {
    setSelectedCategory(value);
  };

  const handleReset = () => {
    setSelectedCategory(null);
  };
  const handleViewBestPractices = () => {
    if (selectedCategory) {
      navigate(`/best-practices?category=${selectedCategory}`);
    } else {
      alert("Please select a category first.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 pt-20 px-4 text-white">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500">Optimal Libraries</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Select a category to see the recommended libraries for your project.
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
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">Recommended Libraries for {selectedCategory}</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {recommendedLibraries[selectedCategory].map((lib, index) => (
                <li key={index} className="transition-all duration-300 ease-in-out hover:text-red-500">
                  {lib}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-8 flex justify-center space-x-4">
        <button
            onClick={handleReset}
            className="w-full md:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md text-white transition-all duration-300"
          >
            Reset
          </button>
          <button
            onClick={handleViewBestPractices}
            className="w-full md:w-auto px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition-all duration-300"
          >
            View Best Practices
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default Libraries;
