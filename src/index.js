import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";

import "./styles.css";

class Todolist extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((task, i) => {
          return (
            <Todos
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

class UserInput extends Component {
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

class Todos extends Component {
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
ReactDOM.render(<App />, rootElement);
