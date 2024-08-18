import React, { useEffect, useState } from 'react';

const ThemeToggler = () => {
  const [theme, setTheme] = useState(() => {
    // Check local storage for theme preference or default to light
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Apply the theme to the document body
    document.body.setAttribute('data-theme', theme);
    // Store the theme in local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      {theme === 'light' ? '🌙' : '☀️'} {/* Change icons based on the theme */}
    </button>
  );
};

export default ThemeToggler;