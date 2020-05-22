import React from "react";

function Item(props) {
  return (
    <div
      onClick={() => {
        return props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default Item;
