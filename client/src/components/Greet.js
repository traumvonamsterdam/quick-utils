import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "../GlobalState";
require("dotenv").config();

export default () => {
  const [{ username }, dispatch] = useStateValue();
  // const [username, setUsername] = useState("Guest");

  const fetchDisplayName = async () => {
    let env = process.env.NODE_ENV;
    let newUsername;
    if (env === "development") {
      newUsername = "James";
    } else {
      const res = await axios.get("/user/name");
      newUsername = res.name;
    }
    dispatch({ type: "changeUserInfo", username: newUsername });
  };

  useEffect(() => {
    fetchDisplayName();
  }, []);

  return (
    <header className="App-header">
      Welcome to QuickUtils&trade;, {username}!
    </header>
  );
};
