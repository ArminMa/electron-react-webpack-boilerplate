/**
*
* Counter
*
*/

import React, { Component } from "react";

import {
  ThemeProvider,
  LayoutContainer,
  LayoutItem,
  Button
} from "../../../MUI";

const style = {
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1em" };
const style1 = { right: "4px" };
const style2 = { outlineWidth: "11px" };

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.state = {
      counterValue: 0,
    };
  }
  handleIncrease(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ counterValue: this.state.counterValue + 1 });
  }
  render() {
	  const {counterValue} = this.state; // eslint-disable-line
    return (
      <div>

        <div col={1}>
          <ThemeProvider>
            <LayoutContainer gutter={20}>
              <LayoutItem xs={6} style={style}>
                <h2><span>Count: {counterValue}</span></h2>
                <Button onClick={this.handleIncrease} raised primary style={style2}>
                  <span>Button</span>
                </Button>
              </LayoutItem>
            </LayoutContainer>
          </ThemeProvider>
        </div>

      </div>
    );
  }
}

export default Counter;
