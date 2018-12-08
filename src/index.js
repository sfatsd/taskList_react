import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import TodoItem from "./TodoItem";
import Todolist from "./TodoList";
import UserInput from "./UserInput";

import "./styles.css";

class App extends Component {
  state = {
    todos: [
      "Practice React",
      "Build taks list",
      "add done button",
      "add delete"
    ]
  };

  handleAddToDo = text => {
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, text]
      };
    });
  };
  handleDelete = index => {
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos.slice(0, index),
          ...prevState.todos.slice(index + 1)
        ]
      };
    });
  };

  render() {
    return (
      <div>
        <Todolist todos={this.state.todos} handleDelete={this.handleDelete} />
        <UserInput handleAddToDo={this.handleAddToDo} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
