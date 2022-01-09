import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      style={{ textDecoration: isClicked ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
