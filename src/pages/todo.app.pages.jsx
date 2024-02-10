import React from "react";
import { Container } from "react-bootstrap";
import TodoCard from "../components/todoList/components/TodoCard";
import TodoShow from "../components/todoList/components/TodoForm";

export default class TodoAppPages extends React.Component {
  render() {
    return (
      <>
        <TodoCard />
      </>
    );
  }
}
