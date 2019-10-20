import React from "react";
import "./App.css";
import UtilTabs from "./components/UtilTabs";
import { StateProvider } from "./GlobalState";
import reducer from "./Reducer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import utils from "./utils";

const App = () => {
  const initialState = {
    theme: "",
    datePicked: new Date(),
    events: [],
    selectedTab: utils[0]
  };

  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <div className="App">
          <header className="App-header">Welcome to QuickUtils&trade;!!</header>
          <UtilTabs />
        </div>
      </StateProvider>
    </Router>
  );
};

export default App;
