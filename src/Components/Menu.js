import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

const colorsA = ["red"];
const colorsB = ["orange"];
const colorsC = ["green"];

export default class MenuComponent extends Component {
  state = { activeB: colorsB[0] };

  handleClick = (e, { name }) =>
    this.setState({
      activeA: name,
      activeB: name,
      ActiveC: name
    });

  render() {
    const { activeA } = this.state;

    return (
      <div>
        <Menu>
          {colorsA.map(c => (
            <Menu.Item
              key={c}
              name={c}
              active={activeA === c}
              color={c}
              onClick={this.handleClick}
            >
              Off
            </Menu.Item>
          ))}

          {colorsB.map(c => (
            <Menu.Item
              key={c}
              name={c}
              active={activeA === c}
              color={c}
              onClick={this.handleClick}
            >
              Sandbox
            </Menu.Item>
          ))}

          {colorsC.map(c => (
            <Menu.Item
              key={c}
              name={c}
              active={activeA === c}
              color={c}
              onClick={this.handleClick}
            >
              Live
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}
