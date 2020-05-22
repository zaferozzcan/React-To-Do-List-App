import import React, { useState } from "react";

function Item(props) {
  var [isDone, setIsDone] = useState(false);

  function itemOnClick() {
    setIsDone(!isDone);
  }

  return (
    <div onClick={itemOnClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default Item;
