import React, { useState, useEffect } from 'react';

/**
 * Dark Mode Toggle - Elegant Switch
 *
 * Design Philosophy:
 * - Minimal, unobtrusive design
 * - Fixed position in top-right
 * - Smooth transitions
 * - Persists preference in localStorage
 */
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialDarkMode = savedMode ? savedMode === 'true' : prefersDark;
    setDarkMode(initialDarkMode);

    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('darkMode', newMode.toString());
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-8 right-8 z-50 w-12 h-12 rounded-full bg-[var(--color-mid-brown)] dark:bg-[var(--color-soft-white)] bg-opacity-10 dark:bg-opacity-10 backdrop-blur-sm border border-[var(--color-mid-brown)] dark:border-[var(--color-soft-white)] border-opacity-20 dark:border-opacity-20 hover:border-opacity-40 dark:hover:border-opacity-40 transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle dark mode"
    >
      {/* Sun Icon (Light Mode) */}
      <svg
        className={`w-5 h-5 absolute transition-all duration-300 ${
          darkMode
            ? 'opacity-0 rotate-90 scale-0'
            : 'opacity-100 rotate-0 scale-100'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="var(--color-dark-brown)"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      {/* Moon Icon (Dark Mode) */}
      <svg
        className={`w-5 h-5 absolute transition-all duration-300 ${
          darkMode
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 -rotate-90 scale-0'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="var(--color-soft-white)"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
};

export default DarkModeToggle;
