import React from "react";
import { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  let counter = text.split(" ").length - 1;

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleRemove = () => {
    setText("");
  };

  const handleOnChange = (e) => {
    console.log("Clicked On change");
    setText(e.target.value);
  };

  const handleFirst = () => {
    let newText = text.split(" ");
    let lent = text.split(" ").length;
    let timepass;
    let arr = [];
    for (let i = 0; i < lent; i++) {
      timepass = newText[i].charAt(0).toUpperCase();
      arr[i] = timepass + newText[i].substring(1);
    }
    let arr2 = arr.toString();
    var str = arr2;
    var replaced = str.split(",").join(" ");
    setText(replaced);
    // console.log(arr2)
  };

  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  return (
    <>
      <div className="container rounded" style={props.myStyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            placeholder="Enter Text Here"
            onChange={handleOnChange}
            className="form-control"
            rows="10"
            id="myBox"
          ></textarea>
        </div>

        <div className="d-flex justify-content-start" style={{ gap: "25px" }}>
          <button className="btn btn-outline-primary" onClick={handleUpClick} style={{ color:"inherit"}}>
            Convert To UpperCase
          </button>
          <button className="btn btn-outline-primary" onClick={handleDoClick} style={{ color:"inherit"}}>
            Convert To LowerCase
          </button>
          <button className="btn btn-outline-primary" onClick={handleFirst} style={{ color:"inherit"}}>
            Capitalize
          </button>
          <button className="btn btn-outline-primary" onClick={handleCopy} style={{ color:"inherit"}}>
            Copy Text
          </button>

          <button
            className="btn btn-danger float-sm-end"
            onClick={handleRemove}
            style={{}}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="container my-3" style={{color:props.myStyle.color}}>
        <h2>Your Text Summery</h2>
        <p>
          {counter} Words and {text.length} Characters
        </p>
        <p>{0.008 * counter} Minutes Required To Read</p>
      </div>
    </>
  );
}

export default TextForm;
