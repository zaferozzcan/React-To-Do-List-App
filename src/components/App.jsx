import React, { React.useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState("");

  function handleOnChange(event) {
    setItem(event.target.value);
    console.log(item);
  }
  function handleOnClick() {
    setListItem(item);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleOnChange} type="text" />
        <button type="button" onClick={handleOnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li> {listItem} </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
