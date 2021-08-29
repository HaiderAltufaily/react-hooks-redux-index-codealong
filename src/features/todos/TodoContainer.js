import React from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Todo from "./Todo";
function TodoContainer() {
  const todos = useSelector((state) => state.todos.entities);
  return (
    <Container>
      <Card bg="secondary" className="align-items-center w-50 m-auto p-5">
        {todos.map((todo) => {
          return <Todo text={todo} />;
        })}
      </Card>
    </Container>
  );
}

export default TodoContainer;
