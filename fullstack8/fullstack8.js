import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState("Click button to check container");

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🚀 React App in Docker</h1>
      <p>{status}</p>
      <button onClick={() => setStatus("✅ Running inside Docker!")}>
        Check Status
      </button>
    </div>
  );
}

export default App;