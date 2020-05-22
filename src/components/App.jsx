import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleOnChange(event) {
    setItem(event.target.value);
    // console.log(item);
  }
  function handleOnClick() {
    setListItems(prevItem => {
      return [...prevItem, item];
    });
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
          {listItems.map(i => {
            return <li>{i}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
