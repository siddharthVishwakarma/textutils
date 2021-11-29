import React, { useState } from "react";

export default function Textform(props) {
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "#042743" : "white",
            }}
            value={text}
            onChange={handelOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handelUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handelloClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handelClearClick}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minuts read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter your text in textbox to preview here"}
        </p>
      </div>
    </>
  );
}
