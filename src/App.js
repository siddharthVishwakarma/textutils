import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //For dark mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/"
            element={
              <Textform
                heading="Enter the text to analyze below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
