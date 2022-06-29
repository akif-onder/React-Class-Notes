import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e) => {
    e.target.value = e.target.value.toUpperCase();
    e.keyCode === 13 && alert("Enter key pressed...");
  };
  const handleAreaPaste = (e) => {
    e.target.value += e.clipboardData.getData("text").toLowerCase();
    e.target.style.border = "3px solid red";
    e.target.style.backgroundColor = 'lightgreen'
    e.preventDefault();

  };

  const handleAreaChange = (e) => {
    if (!e.target.value) {
        e.target.style.border = '1px solid black'
        e.target.style.backgroundColor = "transparent"
    }    
  }

  return (
    <div className="container text-center">
      <h2>CLIPBOARD EVENTS</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <p className="text-start m-4 text-danger"
      onCopy={(e)=>{e.target.style.backgroundColor = "lightblue"}}>{inputValue}</p>
      <textarea
        name="area"
        id="area"
        cols="50"
        rows="10"
        onPaste={handleAreaPaste}
        onChange={handleAreaChange}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
