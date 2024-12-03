import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

// Define the type for the props
interface TitlebarProps {
  title?: string;
  bgColor?: string;
  className?: string;
}

// The Titlebar component accepts props for flexibility and reusability
const Titlebar: React.FC<TitlebarProps> = ({
  title = "Titlebar",
  bgColor = "bg-blue-600",
  className = "text-white",
}) => {
  return (
    <div
      className={`${bgColor} ${className} uppercase flex items-center justify-between`}
    >
      <div className="items-center justify-center flex gap-3">
        <FaRegDotCircle />
        {title}
      </div>
    </div>
  );
};

export default Titlebar;
