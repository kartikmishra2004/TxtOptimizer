import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [Mode, setMode] = useState("light"); // This state defines that weather dark mode is enabled or disabled.
  const [AlertStuff, setAlertStuff ] = useState(null);

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
      <Navbar title="TxtOptimizer" Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={AlertStuff}/>
      <div className="container my-3">
        <TextForm ShowAlert={ShowAlert} heading="Enter the text below to optimize" Mode={Mode} />
      </div>
    </>
  );
}

export default App;
