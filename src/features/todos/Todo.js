import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function Todo({ text }) {
  return (
    <ListGroup className="m-2 w-50">
      <ListGroupItem>{text}</ListGroupItem>
    </ListGroup>
  );
}

export default Todo;
