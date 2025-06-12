import React, { createContext, useContext, useEffect } from 'react';

// Simplified ThemeContext for dark theme only
interface ThemeContextType {
  isDark: true;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Set dark theme on initial load
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark: true }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};

// TypeScript support for CSS custom properties
declare module 'react' {
  interface CSSProperties {
    '--color-bg'?: string;
    '--color-bg-secondary'?: string;
    '--color-text'?: string;
    '--color-text-secondary'?: string;
    '--color-accent'?: string;
    '--color-accent-hover'?: string;
    '--color-border'?: string;
    '--color-card'?: string;
    '--color-card-hover'?: string;
    '--color-input-bg'?: string;
    '--color-input-border'?: string;
    '--color-input-text'?: string;
    '--color-shadow'?: string;
    '--color-overlay'?: string;
    '--color-code-bg'?: string;
    '--color-code-text'?: string;
  }
}
