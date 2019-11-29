import React, { useEffect } from "react";
// import axios from "axios";
import "./App.css";
// import port_config from "./port-config";
import Message from "./components/Header/Message";
import Greet from "./components/Header/Greet";
import UtilTabs from "./components/UtilTabs";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { useStateValue } from "./state-management/GlobalState";
import { fetchWeather, fetchEvents, fetchTasks } from "./common/fetchData";
import "./FontAwesome";
// import { updateDbTasks } from "./common/submitData";

// const PORT = port_config.PORT;

const App = () => {
  const {
    state: { loggedIn, events, tasks, theme },
    dispatch
  } = useStateValue();
  const data = { loggedIn, events, tasks, theme };

  const sendToBackend = data => {
    // Send post request to backend when user changes data
    // axios
    //   .post(`http://${PORT}/app-data`, { data })
    //   .catch(err => console.log("Error in post request"));
  };

  useEffect(() => {
    fetchWeather(dispatch);
    fetchEvents(dispatch);
    fetchTasks(dispatch);
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
