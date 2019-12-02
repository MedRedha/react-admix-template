import React from "react";
import "./styles.css";
import ellipsis from "./../assets/ellipsis.svg";
import unity from "./../assets/unity.svg";
import profits from "./../assets/profits.svg";
import arrow from "./../assets/arrow.svg";
import setting from "./../assets/setting.svg";
import MenuComponent from "../Components/Menu";

function DetailsComponent({ amount, rate, AppName }) {
  return (
    <div className="Center">
      <div className="Right-side">
        <img className="ContainerImg" src={unity} alt="unity" />
        <div className="CenterText"> {AppName}</div>
      </div>
      <div className={"CenterComponent"}>
        <div className="CenterText">
          <div>{amount}</div>
        </div>
        <div className="Rating">
          <div className={rate > 0 ? "RateGreen" : "RateRed"}>
            {rate > 0 ? "+" : ""}
            {rate}%
          </div>
        </div>
      </div>
      <div className="Control">
        <button class="ui square icon button">
          <img
            className="MenuIcon"
            src={setting}
            alt="icon"
            styles="fill:#09243f"
          />
        </button>

        <button class="ui rectangle icon button">
          <img
            className="MenuIcon"
            src={arrow}
            alt="icon"
            styles="fill:#09243f"
          />
        </button>
        <button class="ui rectangle icon button">
          <img
            className="MenuIcon"
            src={profits}
            alt="icon"
            styles="fill:#09243f"
          />
        </button>
      </div>
      <MenuComponent />
      <img className="Ellipsis" src={ellipsis} alt="Ellipsis" />
    </div>
  );
}

export default DetailsComponent;
