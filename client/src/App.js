import React, { useState, useEffect } from "react";
import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
  const darkTheme = "#282c34";
  const lightTheme = "#c2d6ff";

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.style.backgroundColor =
      theme == "dark" ? darkTheme : lightTheme;
  }, [theme]);

  // Toggle dark/light mode
  const changeBgColor = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const buttonName = () => {
    return theme == "dark" ? "Switch to light theme" : "Switch to dark theme";
  };

  return (
    <div className="App">
      <header className="App-header">
        Hey everyone! This is fantastic. Let's try to create a calendar app!
      </header>
      <Calendar />
      <button onClick={changeBgColor} className="theme-toggle">{buttonName()}</button>
    </div>
  );
};

export default App;
