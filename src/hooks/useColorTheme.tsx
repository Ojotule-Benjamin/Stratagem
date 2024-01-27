import React, { useState, useEffect } from "react";

const useColorTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleColorSchemeChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };
    darkModeMediaQuery.addEventListener("change", handleColorSchemeChange);
    setDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleColorSchemeChange);
    };
  }, []);

  return darkMode;
};

export default useColorTheme;
