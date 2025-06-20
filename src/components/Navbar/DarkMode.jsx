import React, { useState, useEffect } from "react";
import lightbtn from "../../assets/btn/lightbtn.png";
import darkbtn from "../../assets/btn/darkbtn.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={lightbtn}
        alt="light button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")} // toggling
        className={`h-12 cursor-pointer 
        drop-shadow-[1px_1px_1px_rgba(1,0,0,0.1)] transition-all 
        duration-300 absolute right-0 z-10 ${theme == "dark" ? "opacity-0" : "opacity-100"}`}
      />
      <img
        src={darkbtn}
        alt="dark button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")} // optional to match light button
        className="h-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(1,0,0,0.1)] 
        transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;