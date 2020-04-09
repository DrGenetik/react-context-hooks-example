import React, { createContext, useContext, useState, useMemo } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

const toggleTheme = (previousTheme) =>
  previousTheme === themes.dark ? themes.light : themes.dark;

// Components within a ThemeContextProvider can do the following to get the
// current them and get a callback to toggle the theme:
//
//   const { theme, toggleTheme } = useThemeContext();
//
export const useThemeContext = () => useContext(ThemeContext);

// ThemeContextProvider is a component container that keeps track of the current
// theme and passes down the toggle callback.
// Use it like:
//
//   <ThemeContextProvider>
//     <YourComponents>
//   </ThemeContextProvider>
//
export const ThemeContextProvider = ({ defaultTheme, children }) => {
  const [theme, setCurrentTheme] = useState(defaultTheme || themes.dark);

  // We memoize for efficiency so we don't change the context value object
  // unless something has changed.
  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        setCurrentTheme(toggleTheme);
      },
    }),
    [theme, setCurrentTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
