import React from "react";
import "./UserOutput.css";

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>Username: {props.username}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
        corrupti soluta ut sint ipsam et autem tempore ab aliquid? Sed!
      </p>
    </div>
  );
};

export default UserOutput;
