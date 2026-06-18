import React, { useState, useEffect } from "react";

export const NavBar = () => {
  // 1. Initialize state based on system preferences or stored cache
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return (
        savedTheme === "dark" ||
        (!savedTheme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return true; // Default fallback configuration
  });

  // 2. Sync global HTML class variant tokens
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Function to handle the smooth slide animation mathematically
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    /* Updated: Wrapper now dynamically handles bg shifts via transition utilities */
    <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-white/80 dark:bg-[#0f223a]/80 backdrop-blur-md border-b border-slate-200 dark:border-[#00f0ff]/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Updated: Brand text adapts to theme changes safely */}
        <div className="text-slate-900 dark:text-white font-black tracking-wider text-xl uppercase">
          PORTFOLIO<span className="text-[#00f0ff]">.</span>
        </div>

        <div className="flex items-center gap-6 md:gap-8 font-medium text-sm">
          {/* Updated: Text layout color handles slate to white scales */}
          <div className="hidden md:flex items-center gap-6 text-slate-600 dark:text-slate-200">
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-[#00f0ff] transition-colors duration-200"
            >
              About 
            </a>
            <a
              href="#skills"
              onClick={(e) => handleScroll(e, "skills")}
              className="hover:text-[#00f0ff] transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="hover:text-[#00f0ff] transition-colors duration-200"
            >
              Projects
            </a>
          </div>

          {/* 3. NEW FEATURE: Embedded Theme Vector Trigger Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme Mode"
            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-[#00f0ff] hover:scale-105 transition-all shadow-sm"
          >
            {darkMode ? (
              /* Sun Vector Node (displays when site background is dark) */
              <svg
                xmlns="http://w3.org"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.344l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            ) : (
              /* Moon Vector Node (displays when site background is light) */
              <svg
                xmlns="http://w3.org"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          <button
            onClick={(e) => handleScroll(e, "contact")}
            className="px-5 py-2 bg-[#00f0ff] hover:bg-[#00d0e0] text-[#0f223a] font-bold rounded-lg shadow-[0_4px_15px_rgba(0,240,255,0.25)] transition-all transform hover:-translate-y-0.5"
          >
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
};
