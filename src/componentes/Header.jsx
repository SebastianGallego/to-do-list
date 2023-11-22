import React from "react";
import IconMoon from "./IconMoon.jsx";
import IconSun from "./IconSun.jsx";
import { useEffect, useState } from "react";

const inicialStateDarkMode = localStorage.getItem("theme") === "dark";

export default function Header() {
  const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="w-[440px] flex justify-between ">
      <h1 className="text-2xl font-bold p-5 text-neutral-500">ToDo List 📝</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <IconSun /> : <IconMoon />}
      </button>
    </div>
  );
}
