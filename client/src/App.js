import React from "react";
import "./App.css";
import UtilTabs from "./components/UtilTabs";
import { StateProvider } from "./GlobalState";
import reducer from "./Reducer";

const App = () => {
  const initialState = {
    theme: "",
    datePicked: new Date(),
    events: []
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <header className="App-header">Welcome to QuickUtils&trade;!!</header>
        <UtilTabs />
      </div>
    </StateProvider>
  );
};

export default App;
