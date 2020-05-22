import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");


  function handleOnChange(event) {
    setItem(event.target.value);
    console.log(item);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleOnChange} type="text" />
        <button type="button">
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li> Item </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
