import React, { useState, useEffect } from "react";
import { useStateValue } from "../GlobalState";
import ThemeToggle from "./ThemeToggle";
import useReactRouter from "use-react-router";
import "../App.css";

const Preferences = () => {

  useEffect(() => {
  }, []);
  return <ThemeToggle />;
};

export default Preferences;
