"use client";

import { createContext } from "react";

// Create a context to provide theme information throughout the app
type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export default ThemeContext;
