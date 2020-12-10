import React, { Component } from "react";
import ButtonBurger from "./ButtonBurger";

const NavMenu = (props) => {
  const menuItem = props.item.map((el, index) => {
    return <li key={index}>{el.name}</li>;
  });

  return (
    <nav className="nav-menu shadow-sm p-3 mb-2 bg-light rounded">
      <ul className={props.active ? "active" : null}>{menuItem}</ul>
      <div>
        <ButtonBurger click={props.click} />
      </div>
    </nav>
  );
};

export default NavMenu;
