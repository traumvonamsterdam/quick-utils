import React from "react";
import "./App.css";
import Message from "./components/Message";
import Greet from "./components/Greet";
import UtilTabs from "./components/UtilTabs";
import { StateProvider } from "./GlobalState";
import reducer from "./GlobalReducer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import initialState from "./InitialState";

const App = () => {
  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Navbar />
        <Message />
        <div className="App">
          <Greet />
          <UtilTabs />
        </div>
      </StateProvider>
    </Router>
  );
};

export default App;
