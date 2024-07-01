import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const upperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const summaryClick = () => {
        const textSummary = document.getElementById("summary");
        textSummary.classList.remove("summaryhide");
    }
    const clearClick = () => {
        let newText = "";
        setText(newText);
        
        const textSummary = document.getElementById("summary");
        textSummary.classList.add("summaryhide");

    }

    // Handling change
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea placeholder="Enter your text here" className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button onClick={upperClick} className="btn btn-danger mx-2">UPPERCASE</button>
      <button onClick={lowerClick} className="btn btn-danger mx-2">lowercase</button>
      <button onClick={summaryClick} className="btn btn-danger mx-2" id="summary-btn">Text summary</button>
      <button onClick={clearClick} className="btn btn-danger mx-2">Clear text</button>
      


      </div>
      <div className="container my-4 summaryhide" id="summary">
        <h2 className="my-4">Your text summary</h2>
        <p><b>Characters : </b>{text.length} <br />
        <b>Words : </b>{text.split(" ").length} <br />
        <b>Sentences : </b>{text.split(".").length - 1} <br />
        <b>Average reading time : </b> { (0.008 * text.split(" ").length).toFixed(2) } minutes</p>
      </div>
    </>
  );
}


TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
