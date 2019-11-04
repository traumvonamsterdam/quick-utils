import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import port_config from "./port-config";
import Message from "./components/Message";
import Greet from "./components/Greet";
import UtilTabs from "./components/UtilTabs";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "./GlobalState";
import { fetchWeather, fetchEvents, fetchTasks } from "./fetchData";

const PORT = port_config.PORT;

const App = () => {
  const [{ loggedIn, events, tasks, theme }, dispatch] = useStateValue();
  const data = { loggedIn, events, tasks, theme };

  const sendToBackend = data => {
    // Send post request to backend when user changes data
    axios
      .post(`http://${PORT}/app-data`, { data })
      .catch(err => console.log("Error in post request"));
  };

  useEffect(() => {
    fetchWeather(dispatch);
    fetchEvents(dispatch);
    fetchTasks(dispatch);

    // LoadState(dispatch);
  }, []);

  useEffect(() => {
    sendToBackend(data);
  }, [JSON.stringify(data)]);

  return (
    <Router>
      <Navbar />
      <Message />
      <div className="App">
        <Greet />
        <UtilTabs />
      </div>
    </Router>
  );
};

export default App;
