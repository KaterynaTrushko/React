import React from "react";
import { useState } from "react";


class Homework1 extends React.Component {
  constructor(props) {
    super();
    this.state = {
      s1: props.p1
    }
    this.s2 = 202;
  }

  componentDidMount() {

    let val = this.state.s1;
    val += 5;
    this.setState({ s1: val })
    this.s2 += 5;

  }

buttonHander = () => {
  let val = this.state.s1;
  val += 50;
  this.setState({ s1: val })
  this.s2 += 50;
}

  render() {
    return (
      <>
        <div> {this.state.s1}</div>
        <div> {this.s2}</div>
        <button onClick={this.buttonHander} >Push</button>
      </>
    )
  }
}

export default Homework1;