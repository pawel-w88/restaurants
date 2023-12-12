import React from "react";

const categories = [
  "auto",
  "home-services",
  "education",
  "restaurant",
  "active",
  "beauty",
  "healty",
  "pets",
];

export const Categories = () => {
  return (
    <div className="flex justify-evenly items-center p-2">
      {categories.map((category) => (
        <button key={category} className="text-gray-400  hover:text-gray-800 border border-none hover:border-gray-800 rounded-md p-1">
          {category}
        </button>
      ))}
    </div>
  );
};
