import React, { useState, useEffect } from "react";
import FolderStructure from "../components/FolderStructure";
import { folderStructures } from "../lib/FolderStructure";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Category: React.FC = () => {
  // Retrieve the saved category from local storage or set it to null
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof folderStructures | null>(
    () => localStorage.getItem("selectedCategory") as keyof typeof folderStructures | null
  );

  // Save the selected category to local storage whenever it changes
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 pt-20 px-4 text-white">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500">Choose Your Category</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Select a category to see the folder structure. Explore various setups tailored to different needs.
        </p>
      </header>
      
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-2xl border border-red-600 transition-all duration-300 ease-in-out hover:shadow-red-600">
        <Select value={selectedCategory || undefined} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-full bg-gray-700 p-3 rounded-md border border-red-600 shadow-md text-white focus:ring-2 focus:ring-red-400">
            <SelectValue>
              {selectedCategory ? selectedCategory : "Select a category"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-gray-700 border border-gray-600 shadow-lg rounded-md text-white">
            <SelectItem value="ecommerce" className="p-3 hover:bg-red-700 hover:text-white transition-all duration-300">eCommerce</SelectItem>
            <SelectItem value="blogs" className="p-3 hover:bg-red-700 hover:text-white transition-all duration-300">Blogs</SelectItem>
            <SelectItem value="contentManagement" className="p-3 hover:bg-red-700 hover:text-white transition-all duration-300">Content Management</SelectItem>
            <SelectItem value="portfolio" className="p-3 hover:bg-red-700 hover:text-white transition-all duration-300">Portfolio</SelectItem>
            <SelectItem value="Social Media" className="p-3 hover:bg-red-700 hover:text-white transition-all duration-300">Social Media</SelectItem>
            <SelectItem value="elearning" className="p-3 hover:bg-red-700 hover:text-white transition-all duration-300">eLearning</SelectItem>
            <SelectItem value="mobileApp" className="p-3 hover:bg-red-700 hover:text-white transition-all duration-300">Mobile App (React Native)</SelectItem>
            <SelectItem value="staticSite" className="p-3 hover:bg-red-700 hover:text-white transition-all duration-300">Static Site</SelectItem>
            <SelectItem value="fullStackApp" className="p-3 hover:bg-red-700 hover:text-white transition-all duration-300">Full Stack App</SelectItem>
          </SelectContent>
        </Select>

        {selectedCategory && (
          <div className="mt-8">
            <FolderStructure structure={folderStructures[selectedCategory]} />
          </div>
        )}
        
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md text-white transition-all duration-300"
          >
            Reset
          </button>
          <button
            onClick={() => alert('Selection saved!')}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition-all duration-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
