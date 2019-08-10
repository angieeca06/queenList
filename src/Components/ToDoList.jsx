import React from "react";
import { Container, Form } from "react-bootstrap";

const ToDoList = props => {
  const arrToDo = props.arrToDo;
  return (
    <Container>
      {arrToDo.map((toDo, i) => (
        <Form.Check
          type="checkbox"
          label={toDo}
          value={props.value}
          id={i}
          key={i}
          onChange={props.checkBoxChecked}
        />
      ))}
    </Container>
  );
};

export default ToDoList;
