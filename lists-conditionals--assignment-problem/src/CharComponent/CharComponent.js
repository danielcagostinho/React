import React from "react";
import "./CharComponent.css";

const CharComponent = props => {
  return (
    <div onClick={props.click} className="CharComponent">
      <p>{props.letter}</p>
    </div>
  );
};

export default CharComponent;
