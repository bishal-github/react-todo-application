import React, { Component } from "react";
import FormContainer from "../../reusable/card.component";

export default class TodoShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("props", this.props);

    return (
      <>
        {this.props.todos.length > 0 && (
          <FormContainer>
            <h3>Todo List:</h3>
            <ul>
              {this.props.todos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </FormContainer>
        )}
      </>
    );
  }
}
