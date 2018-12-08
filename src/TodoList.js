import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import TodoItem from "./TodoItem";

export default class Todolist extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((task, i) => {
          return (
            <TodoItem
              task={task}
              key={i}
              handleDelete={this.props.handleDelete}
              index={i}
            />
          );
        })}
      </div>
    );
  }
}
