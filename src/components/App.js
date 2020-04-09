import React from "react";
import { ThemeContextProvider, themes } from "../contexts/theme";
import Content from "./Content";
import "../styles/App.css";

function App(props) {
  return (
    <ThemeContextProvider defaultTheme={themes.light}>
      <Content />
    </ThemeContextProvider>
  );
}

export default App;
