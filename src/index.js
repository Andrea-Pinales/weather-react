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
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
