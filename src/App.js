import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

export function App() {
  return (
    <div className="App">
      <Weather city="lisbon" />
    </div>
  );
}

export default App;
