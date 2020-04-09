import React from "react";
import { useThemeContext } from "../contexts/theme";

function ThemeTogglerButton() {
  const { theme, toggleTheme } = useThemeContext();

  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
      Toggle Theme
    </button>
  );
}

export default ThemeTogglerButton;
