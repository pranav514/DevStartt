import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof folderStructures | null>(
    () => localStorage.getItem("selectedCategory") as keyof typeof folderStructures | null
  );
  const [searchInput, setSearchInput] = useState(""); // State for search input

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
    setSearchInput(""); // Reset search input as well
  };

  const handleViewLibraries = () => {
    if (selectedCategory) {
      navigate(`/libraries?category=${selectedCategory}`);
    } else {
      navigate('/libraries');
    }
  };

  const handleViewBestPractices = () => {
    if (selectedCategory) {
      navigate(`/best-practices?category=${selectedCategory}`);
    } else {
      navigate('/best-practices');
    }
  };

  // Debug: log the search input and filtered categories
  console.log("Search Input:", searchInput);

  // Filtered categories based on search input
  const filteredCategories = Object.keys(folderStructures).filter(category => {
    const match = category.toLowerCase().includes(searchInput.toLowerCase());
    console.log(`Category: ${category}, Match: ${match}`); // Debug: log each category and if it matches
    return match;
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 pt-20 px-4 text-white">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500">Choose Your Category</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Select a category to see the folder structure. Explore various setups tailored to different needs.
        </p>
      </header>

      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-2xl border border-red-600 transition-all duration-300 ease-in-out hover:shadow-red-600">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search categories..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full mb-4 p-3 bg-gray-700 rounded-md border border-red-600 shadow-md text-white focus:ring-2 focus:ring-red-400"
        />

        <Select value={selectedCategory || "Select a category"} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-full bg-gray-700 p-3 rounded-md border border-red-600 shadow-md text-white focus:ring-2 focus:ring-red-400">
            <SelectValue>{selectedCategory ? selectedCategory : "Select a category"}</SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-gray-700 border border-gray-600 shadow-lg rounded-md text-white">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <SelectItem
                  key={category}
                  value={category as keyof typeof folderStructures}
                  className="hover:bg-red-700 hover:text-white transition-all duration-300"
                >
                  {category.replace(/([A-Z])/g, ' $1').trim()} {/* Capitalize and add spaces */}
                </SelectItem>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">No categories found</div>
            )}
          </SelectContent>
        </Select>

        {selectedCategory && (
          <div className="mt-8">
            <FolderStructure structure={folderStructures[selectedCategory]} />
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

export default Category;
