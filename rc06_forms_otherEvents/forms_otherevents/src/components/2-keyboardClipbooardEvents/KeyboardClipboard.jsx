import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e) =>{
    e.target.value = e.target.value.toUpperCase();
    e.keyCode === 13 && alert('Enter key pressed...');
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
      <p className="text-start m-4 text-danger">{inputValue}</p>
    </div>
  );
};

export default KeyboardClipboard;
