import React, { useState } from "react";
import { Weather } from "./comp/Weather";
import "./App.css";

function App() {
  const [cityName, setCityName] = useState("");

  // on key press enter we will call the weather api
  // using the search func
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await Weather(cityName);
      console.log(data);
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search.."
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyPress={search}
      />
    </div>
  );
}

export default App;
