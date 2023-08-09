"use client"
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-lg mx-auto my-4 rounded-lg overflow-hidden shadow-lg bg-gray-900">
      <div
        className="flex items-center justify-between bg-blue-500 p-4 cursor-pointer transition-colors duration-300"
        onClick={toggleAccordion}
      >
        <h2
          className={`text-lg font-semibold text-white ${
            isOpen ? "text-aqua" : ""
          }`}
        >
          {title}
        </h2>
        <span
          className={`text-lg transform transition-transform ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          &#x25B6;
        </span>
      </div>
      {isOpen && (
        <div className="p-4 bg-white dark:bg-gray-700">
          <p className="text-gray-700 dark:text-gray-300">{content}</p>
        </div>
      )}
   
    </div>
  );
};

export default Accordion;
