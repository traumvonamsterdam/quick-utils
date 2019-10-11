import React from "react";
import "./App.css";
import Calendar from './components/Calendar'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Hey everyone! This is fantastic. Let's see if we can use the Google calendar API here.</header>
      <Calendar greeting={"Hello"} />
    </div>
  );
};

export default App;
