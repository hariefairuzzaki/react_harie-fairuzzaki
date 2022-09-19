import React, { Component } from "react";
import data from "../data.json";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { data, userInput: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(({ userInput }) =>
      userInput
        ? {
            data: [...this.state.data, { id: this.state.data.length + 1, title: userInput, completed: false }],
            userInput: "",
          }
        : alert("To Do Kosong")
    );
  };

  handleDelete = (id) => {
    this.setState({ data: this.state.data.filter((task) => task.id !== id) });
  };

  handleCheckbox = (item) => {
    this.setState({ data: this.state.data.map((el) => (el.id === item.id ? { ...el, completed: !el.completed } : el)) });
    console.log(item);
  };

  render() {
    const { userInput } = this.state;

    return (
      <>
        <ToDoInput userInput={userInput} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <ToDoList todoList={this.state.data} handleDelete={this.handleDelete} handleCheckbox={this.handleCheckbox} />
      </>
    );
  }
}
