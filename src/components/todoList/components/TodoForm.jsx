import React, { Component } from "react";
import FormContainer from "../../reusable/card.component";
import { AiOutlineDelete } from "react-icons/ai";

export default class TodoShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.todos.length > 0 && (
          <FormContainer>
            <h3>Todo List:</h3>
            <ol>
              {this.props.todos.map((todo, index) => (
                <li key={index} className="d-flex justify-content-between">
                  {todo}{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => this.props.onDelete(index)}
                  >
                    <AiOutlineDelete />
                  </span>
                </li>
              ))}
            </ol>
          </FormContainer>
        )}
      </>
    );
  }
}
