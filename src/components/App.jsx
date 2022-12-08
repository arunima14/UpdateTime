import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("TIME");

  function updateTime() {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}> Update Time </button>
    </div>
  );
}

export default App;
