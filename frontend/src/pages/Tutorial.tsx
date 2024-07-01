import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { yttutorials } from "../lib/YtTutorials";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Tutorial: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") as keyof typeof yttutorials | null
    || (localStorage.getItem("selectedCategory") as keyof typeof yttutorials | null);

  const [selectedCategory, setSelectedCategory] = useState<keyof typeof yttutorials | null>(initialCategory);
  const [searchInput, setSearchInput] = useState(""); // State for search input

  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem("selectedCategory", selectedCategory);
    } else {
      localStorage.removeItem("selectedCategory");
    }
  }, [selectedCategory]);

  const handleCategoryChange = (value: keyof typeof yttutorials) => {
    setSelectedCategory(value);
  };

  // Filter categories based on search input
  const filteredCategories = Object.keys(yttutorials).filter(category =>
    category.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 pt-20 px-4 text-white">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 animate-pulse">Tutorial Page</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Select a category to view YouTube tutorials.
        </p>
      </header>

      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-xl border border-blue-600 transition-all duration-300 ease-in-out hover:shadow-blue-600 hover:transform hover:scale-105">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search categories..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full mb-4 p-3 bg-gray-700 rounded-md border border-blue-600 shadow-md text-white focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
        />

        <Select value={selectedCategory || "Select a category"} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-full bg-gray-700 p-3 rounded-md border border-blue-600 shadow-md text-white focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400">
            <SelectValue>{selectedCategory ? selectedCategory : "Select a category"}</SelectValue>
          </SelectTrigger>
          <SelectContent
            className="bg-gray-700 border border-gray-600 shadow-lg rounded-md text-white transition-all duration-300"
            style={{ top: '100%', left: 0, marginTop: '4px', position: 'absolute' }}
          >
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <SelectItem
                  key={category}
                  value={category as keyof typeof yttutorials}
                  className="hover:bg-blue-700 hover:text-white transition-all duration-300"
                >
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </SelectItem>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">No categories found</div>
            )}
          </SelectContent>
        </Select>

        {selectedCategory && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">
              YouTube Tutorials for {selectedCategory.replace(/([A-Z])/g, ' $1').trim()}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {yttutorials[selectedCategory].map((yttutorial, index) => (
                <li key={index} className="transition-all duration-300 ease-in-out hover:text-blue-500 hover:underline">
                  <a href={yttutorial.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">
                    {yttutorial.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tutorial;
