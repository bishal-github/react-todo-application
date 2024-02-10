import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import FormContainer from "../../reusable/card.component";
import TodoShow from "./TodoForm";

export default class TodoCard extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      todos: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  componentDidMount() {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      this.setState({
        todos: storedTodos,
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, todos } = this.state;
    if (text.trim() !== "") {
      const newTodos = [...todos, text];
      this.setState({
        text: "",
        todos: newTodos,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    return (
      <Container className="d-flex flex-column gap-3 ">
        <FormContainer>
          <Form onSubmit={this.handleSubmit}>
            <h1 className="text-center">ToDo App</h1>
            <Form.Group controlId="text-input" className="d-flex gap-3 ">
              <Form.Control
                type="text"
                size="sm"
                value={this.state.text}
                onChange={this.handleChange}
                name="text-input"
                placeholder="Enter task..."
                autoComplete="off"
              />
              <Button
                type="submit"
                variant="primary"
                className="text-nowrap"
                size="sm"
              >
                Add Task
              </Button>
            </Form.Group>
          </Form>
        </FormContainer>
        <TodoShow todos={this.state.todos} />
      </Container>
    );
  }
}
