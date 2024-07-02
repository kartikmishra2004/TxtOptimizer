import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [Mode, setMode] = useState("light"); // This state defines that weather dark mode is enabled or disabled.
  const [Alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type 
    });
  }
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1a1a1a"
      showAlert("Dark mod has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mod has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TxtOptimizer" Mode={Mode} toggleMode={toggleMode}/>
      <Alert/>
      <div className="container my-3">
        <TextForm heading="Enter the text below to optimize" Mode={Mode}/>
      </div>
    </>
  );
}

export default App;
