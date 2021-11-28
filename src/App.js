// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); //For dark mode

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
