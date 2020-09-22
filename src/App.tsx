import React, { useState } from "react";
import "./App.css";
import { ImageSlider } from "./components/ImageSlider";

function App() {
  const [visibleState, setVisibleState] = useState<boolean>(true);
  return (
    <div className="App">
      <div style={visibleState ? {} : { display: "none" }}>
        <ImageSlider></ImageSlider>
      </div>
      <button onClick={() => setVisibleState(!visibleState)}>
        {visibleState ? "Close" : "Open"}
      </button>
    </div>
  );
}

export default App;
