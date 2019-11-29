import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useStateValue } from "../../state-management/GlobalState";
require("dotenv").config();


export default () => {
  const { userInfo, dispatch } = useStateValue();
  // const [username, setUsername] = useState("Guest");

  const fetchDisplayName = async () => {
    let env = process.env.NODE_ENV;
    let newUsername: string;
    if (env === "development") {
      newUsername = "James";
    } else {
      const res = await axios.get("/user/name");
      newUsername = res.data.name;

      axios.get("/user/name").then(res => {
        newUsername = res.data.name;
      });
    }
    dispatch({
      type: "changeUserInfo",
      userInfo: { ...userInfo, name: newUsername }
    });
  };

  useEffect(() => {
    fetchDisplayName();
  }, []);

  return (
    <header className="App-header">
      Welcome to QuickUtils&trade;, {userInfo.name}!
    </header>
  );
};
