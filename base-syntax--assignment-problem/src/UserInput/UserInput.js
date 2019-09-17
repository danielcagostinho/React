import React from "react";
const UserInput = props => {
  const inputStyle = {
    border: "solid red 2px"
  };

  return (
    <div>
      <input
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName}
      ></input>
    </div>
  );
};

export default UserInput;
