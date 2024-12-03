"use client";

import { useEffect, useState } from "react";
import { navItem } from "@utils/constants";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null); // State can be a number or null

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`absolute w-full px-[5vw] py-[2rem] text-gray-800 z-30 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-sm" : ""
      }`}
    >
      <div className="w-full flex">
        <div className="flex-1 flex items-center justify-start">
          <span className="font-bold text-2xl text-azure-600 font-unbounded">HaloSpect</span>
        </div>
        <div className="flex-2 flex items-center justify-end gap-[3vw]">
          {navItem?.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item?.url || "#"}
                className="font-medium text-gray-700 flex flex-row items-center justify-center relative group-hover:text-[#1F75FE] transition-colors duration-300"
              >
                {item?.title}
                {item?.dropdown && (
                  <RiArrowDropDownLine className="text-3xl mt-[2px]" />
                )}
              </Link>

              {item?.dropdown && activeDropdown === index && (
                <div className="absolute pt-[2vh] left-0 ">
                  <div className="text-white bg-azure-600 bg-opacity-90 shadow-lg rounded-lg p-2 w-[20vw] transition-all duration-300 opacity-100 z-50">
                    {item?.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem?.url}
                        className="block px-4 py-2 rounded-md hover:bg-[#f1f5f9] hover:text-[#1F75FE] transition-all duration-200"
                      >
                        {subItem?.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="px-3 py-2 border border-azure-600 rounded-full">
            <span className="font-semibold text-base text-azure-600">
              Let's Connect
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
