import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import TodoItem from "./TodoItem";
import Todolist from "./TodoList";
import UserInput from "./UserInput";

import "./styles.css";

class Counter extends Component {
  state = {
    //unDone: this.props.todos.length;
    unDone: 0
    //done: 1
  };

  handleCount = length => {
    this.setState({ unDone: length });
  };

  render() {
    return (
      <div>
        <App handleCount={this.handleCount} />
        <div> To Do Items: {this.state.unDone}</div>
      </div>
    );
  }
}

class App extends Component {
  state = {
    todos: []
  };

  handleAddToDo = text => {
    this.props.handleCount(this.state.todos.length + 1);
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, text]
      };
    });
  };
  handleDelete = index => {
    this.props.handleCount(this.state.todos.length - 1);
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
render(<Counter />, rootElement);
