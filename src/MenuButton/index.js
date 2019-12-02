import React from "react";
import "./styles.css";

function MenuButton({ icon, text }) {
  return (
    <div className="Button">
      <img className="MenuIcons" src={icon} alt="icon" />
      <div className="MenuTitle"> {text}</div>
    </div>
  );
}

export default MenuButton;
