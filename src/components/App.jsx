import React, { useState } from "react";

function App() {
  const [inputText, setInputTextState] = useState("");
  const [toDoItems, setToDoItems] = useState([]);

  function handleEvent(event) {
    const newValue = event.target.value;

    setInputTextState(newValue);
  }

  function clickButton() {
    setToDoItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleEvent} value={inputText} type="text" />
        <button onClick={clickButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoItems.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
