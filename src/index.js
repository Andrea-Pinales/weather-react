import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Current from "./Current";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      <Current />
      <a
        href="https://github.com/Andrea-Pinales/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      <span>by Andrea Pinales</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
