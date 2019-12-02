import React from "react";
import "./styles.css";

function MenuButton({ icon, text, amount, rate }) {
  return (
    <div className={"MainContainer"}>
      <div className="Header">
        <img className="ComponentIcon" src={icon} alt="icon" />
        <div> {text} </div>
      </div>
      <div className={"Body"}>
        <div className="Text">{amount}</div>
        <div className={rate > 0 ? "Rate-green" : "Rate-red"}>
          {rate > 0 ? "+" : ""}
          {rate}%
        </div>
      </div>
    </div>
  );
}

export default MenuButton;
