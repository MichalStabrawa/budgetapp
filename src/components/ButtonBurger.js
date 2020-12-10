import React from "react";

const ButtonBurger = (props) => {
  return (
    <button className="btn-burger" onClick={props.click}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default ButtonBurger;
