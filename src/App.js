import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light"); // This state defines that weather dark mode is enabled or disabled.
  const [AlertStuff, setAlertStuff] = useState(null);

  const ShowAlert = (message, type) => {
    setAlertStuff({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlertStuff(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1a1a1a"
      ShowAlert("Dark mode has been enabled!", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      ShowAlert("Light mode has been enabled!", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TxtOptimizer" Mode={Mode} toggleMode={toggleMode} />
        <Alert alert={AlertStuff} Mode={Mode} />
        <div className="container my-3">
          <Routes>
            {/* Home Route */}
            <Route exact path="/" element={<TextForm ShowAlert={ShowAlert} heading="Enter the text below to optimize" Mode={Mode}/>} >
              
            </Route>

            {/* About Route */}
            <Route exact path="/about" element={<About Mode={Mode} />}>
              
            </Route>
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;