import React, {useState} from "react";
import TodoForm from "./TodoForm";
import { Row, Col, Container } from "react-bootstrap";
import ToDoList from "./ToDoList";

const ToDoComponent = () => {
    const [value, setValue] = useState(true);
    const [arrToDo, setArrToDo] = useState([]);
    const [toDo, setToDo] = useState("");

  const handleToDo = e => {
    setToDo(e.target.value);
  };

  const addHomework = toDo => {
    arrToDo.push(toDo);
    setArrToDo(arrToDo);
    setToDo("");
  };

  const checkBoxChecked = () => {
    value === false ? setValue(true) : setValue(false);
    console.log(value)
  };

  return(
      <Container>
        <Row>
          <TodoForm handleToDo = {handleToDo} addHomework = {addHomework} toDo={toDo}/>;
        </Row>
        <Row>
          <Col>
            <ToDoList arrToDo = {arrToDo} checkBoxChecked={checkBoxChecked} value={value} />
          </Col>
        </Row>
      </Container>
  )
};

export default ToDoComponent;
