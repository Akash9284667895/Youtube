import React, { useState } from "react";

const Button = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Javascript",
    "Mixes",
    "Lectures",
    "Arjit Singh",
    "Mantras",
    "Lo-fi",
    "History",
  ];

  const itemsPerPage = 8; // Number of items to display at once
  const [currentPage, setCurrentPage] = useState(0);

  const totalPageCount = Math.ceil(list.length / itemsPerPage);

  const handleClickNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPageCount);
  };

  return (
    <div className="flex flex-row">
      {list.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item, index) => (
        <button className="px-5 py-2 m-5 bg-gray-200 rounded-lg" key={index}>
          {item}
        </button>
      ))}
      {totalPageCount > 1 && (
        <button className="px-5 py-2 m-5 bg-black rounded-lg text-white" onClick={handleClickNext}>
        ➡
      </button>
      
      )}
    </div>
  );
};

export default Button;
