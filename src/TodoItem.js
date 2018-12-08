import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";

export default class TodoItem extends Component {
  state = {
    done: false
  };
  onClick = () => {
    this.setState(prevState => {
      return {
        done: !prevState.done
      };
    });
  };
  onDelete = () => {
    this.props.handleDelete(this.props.index);
  };

  render() {
    const textStyle = {
      textDecoration: this.state.done ? "line-through" : "none"
    };
    const button = this.state.done ? "undo" : "done";
    return (
      <div>
        <button onClick={this.onClick}> {button} </button>
        <span style={textStyle}> {this.props.task} </span>
        <button onClick={this.onDelete}> x </button>
      </div>
    );
  }
}
