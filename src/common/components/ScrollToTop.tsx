"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the page has scrolled down
  const handleScroll = () => {
    if (window.pageYOffset > 100) { // Show button after 100px scroll
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top functionality
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  // Set up event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && ( // Only render if scrolled down
      <div
        onClick={handleScrollToTop}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300"
      >
        <div className="p-2 rounded-md bg-white">
          <IoIosArrowDropupCircle className="text-2xl text-azure-600" />
        </div>
      </div>
    )
  );
}
