import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import port_config from "./port-config";
import Message from "./components/Message";
import Greet from "./components/Greet";
import UtilTabs from "./components/UtilTabs";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "./GlobalState";

const App = () => {
  const [{ loggedIn, events, tasks, theme }] = useStateValue();
  const data = { loggedIn, events, tasks, theme };

  const sendToBackend = data => {
    const PORT = port_config.PORT;
    // console.log("POST request");
    axios
      .post(`http://${PORT}/app-data`, { data })
      .catch(err => console.log("Error in post request"));
  };

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
