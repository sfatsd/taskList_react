import React, { Component } from "react";

export default class UserInput extends Component {
  state = {
    input: ""
  };
  onClick = () => {
    this.props.handleAddToDo(this.state.input);
    this.setState({ input: "" });
  };
  onChange = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <div>
        <input onChange={this.onChange} value={this.state.input} type="text" />
        <button onClick={this.onClick}>Add</button>
      </div>
    );
  }
}
