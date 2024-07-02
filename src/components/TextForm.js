import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const upperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to uppercase!", "success");
    }
    const lowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("Converted to lowercase!", "success");
    }
    const summaryClick = () => {
        const textSummary = document.getElementById("summary");
        const preview = document.getElementById("preview");
        textSummary.classList.remove("summaryhide");
        preview.classList.remove("previewhide");
    }
    const copyClick = () => {
      var text = document.getElementById("textBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.ShowAlert("Coppied to clipboard!", "success");
    }
    const removeExtraSpacesClick = () => {
      let newText = text.split(/[ ]+ /);
      setText(newText.join(" "));
      props.ShowAlert("Extra space removed!", "success");
    }
    const clearClick = () => {
        let newText = "";
        setText(newText);
        props.ShowAlert("Text cleared!", "success");
        
        const textSummary = document.getElementById("summary");
        const preview = document.getElementById("preview");
        textSummary.classList.add("summaryhide");
        preview.classList.add("previewhide");

    }

    // Handling change
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h2 style={{color: props.Mode==='light'?'#1a1a1a':'white'}}>{props.heading}</h2>
      <div className="mb-3">
        <textarea style={{backgroundColor : props.Mode==='light'?'white':'#222222',color: props.Mode==='light'?'#1a1a1a':'white'}} className="form-control" id="textBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button onClick={upperClick} className="btn btn-danger mx-2 my-2">UPPERCASE</button>
      <button onClick={lowerClick} className="btn btn-danger mx-2 my-2">lowercase</button>
      <button onClick={summaryClick} className="btn btn-danger mx-2 my-2" id="summary-btn">Text summary</button>
      <button onClick={removeExtraSpacesClick} className="btn btn-danger mx-2 my-2">Remove extra spaces</button>
      <button onClick={copyClick} className="btn btn-danger mx-2 my-2">Copy text</button>
      <button onClick={clearClick} className="btn btn-danger mx-2 my-2">Clear text</button>
      


      </div>
      <div className="container my-4 summaryhide" id="summary" style={{color: props.Mode==='light'?'#1a1a1a':'white'}}>
        <h2 className="my-4">Your text summary</h2>
        <p><b>Characters : </b>{text.length > 0 ? text.length : "0"} <br />
        <b>Words : </b>{text.length > 0 ? text.split(" ").length : "0"} <br />
        <b>Sentences : </b>{text.length > 0 ? text.split(".").length -1 : "0"} <br />
        <b>Paragraph : </b>{text.length > 0 ? text.split("\n\n").length : "0"} <br />
        <b>Average reading time : </b> {text.length > 0 ? (0.008 * text.split(" ").length).toFixed(2) : "0" } minutes</p>
      </div>
      <div className="previewhide container my-4" id="preview" style={{color: props.Mode==='light'?'#1a1a1a':'white'}}>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox to preview"}</p>
      </div>
    </>
  );
}


TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
