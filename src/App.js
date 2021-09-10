import React, { useState } from "react";
import { Weather } from "./comp/Weather";
import "./App.css";

function App() {
  const [cityName, setCityName] = useState("");
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search.."
        value={cityName}
        onchange={(e) => setCityName(e.target.value)}
      />
    </div>
  );
}

export default App;
