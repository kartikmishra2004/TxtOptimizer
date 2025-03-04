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
  
  document.title = "TxtOptimizer - Home";
  document.body.style.transition = '0.3s all ease-in-out'

  return (
    <>
    <div className="container">
      <h2 style={{color: props.Mode==='light'?'#1a1a1a':'#cccccc'}}>{props.heading}</h2>
      <div className="mb-3">
        <textarea style={{backgroundColor : props.Mode==='light'?'#f4f4f4':'#222222',color: props.Mode==='light'?'#1a1a1a':'#cccccc', transition : '0.3s all ease-in-out'}} className="form-control" id="textBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button onClick={upperClick} className="btn btn-danger mx-2 my-2">UPPERCASE</button>
      <button onClick={lowerClick} className="btn btn-danger mx-2 my-2">lowercase</button>
      <button onClick={removeExtraSpacesClick} className="btn btn-danger mx-2 my-2">Remove extra spaces</button>
      <button onClick={summaryClick} className="btn btn-danger mx-2 my-2" id="summary-btn">Text summary</button>
      <button onClick={copyClick} className="btn btn-danger mx-2 my-2">Copy text</button>
      <button onClick={clearClick} className="btn btn-danger mx-2 my-2">Clear text</button>
      


      </div>
      <div className="container my-4 summaryhide" id="summary" style={{color: props.Mode==='light'?'#1a1a1a':'#cccccc'}}>
        <h2 className="my-4">Your text summary</h2>
        <p><b>Characters</b> : {text.length} <br />
        <b>Words</b> : {text.split(" ").filter((element)=>{return element.length!==0}).length} <br />
        <b>Average reading time</b> : {text.length > 0 ? (0.008 * text.split(" ").length).toFixed(2) : "0" } minutes</p>
      </div>
      <div className="previewhide container my-4" id="preview" style={{color: props.Mode==='light'?'#1a1a1a':'#cccccc'}}>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox to preview"}</p>
      </div>
    </>
  );
}


TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
