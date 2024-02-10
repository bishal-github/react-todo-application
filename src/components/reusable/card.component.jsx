import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center align-items-md-center">
          <Col className="mt-4">
            <Card className="p-5 w-100" data-bs-theme="dark">
              {this.props.children}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
