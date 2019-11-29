import React, { useState, useEffect } from "react";
import { useStateValue } from "../../state-management/GlobalState";
import { Button } from "reactstrap";
import "../../App.css";

const ThemeToggle = () => {
  const darkTheme = "rgb(40, 44, 52)";
  const lightTheme = "rgb(194, 214, 255)";
  const {theme, dispatch} = useStateValue(darkTheme);

  useEffect(() => {
    const body = document.querySelector("body");
    const initColor = window.getComputedStyle(body).backgroundColor;
    if (initColor === "rgb(40, 44, 52)") {
      dispatch({ type: "changeTheme", newTheme: "dark" });
    } else {
      dispatch({ type: "changeTheme", newTheme: "light" });
    }
  }, []);

  // Toggle dark/light mode
  const changeBgColor = () => {
    const newColor = theme === "dark" ? lightTheme : darkTheme;
    const newTheme = theme === "dark" ? "light" : "dark";
    document.body.style.backgroundColor = newColor;

    dispatch({ type: "changeTheme", newTheme });
  };

  const buttonName = () => {
    return theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  };

  return (
    <Button onClick={changeBgColor} className="theme-toggle">
      {buttonName()}
    </Button>
  );
};

export default ThemeToggle;
