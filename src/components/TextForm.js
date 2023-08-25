import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
//   const [x,setX] = useState('');
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    // setX(newtext);
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    // setX(newtext);
  };
  const handleClearclick = () => {
    let newtext= "";
    setText(newtext);
  }

  const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="8"
          id="myBox"
          placeholder="enter text here to analyze or convert "
        ></textarea>
      </div>
      <button className="btn btn-primary m-2" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-danger m-2" onClick={handleLoClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-success m-1" onClick={handleClearclick}>Clear words</button>
      <button className="btn btn-success m-1" onClick={handleCopy}>Copy words</button>
      <button className="btn btn-success m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <h6>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p> you can read in {0.008 * text.split(" ").length} minutes</p>
      </h6>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter somthing in the above textbox to preview it here"}</p>
      {/* <div className="container">
        <p>{x}</p>
      </div> */}
    </div>
  );
};

export default TextForm;
