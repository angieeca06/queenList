import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const useTodoForm = props => {
  return (
    <InputGroup className="col-md-6 align-content-center mx-auto">
      <FormControl
        aria-label="Text input with checkbox"
        type="text"
        placeholder="What you have to do?"
        onChange={props.handleToDo}
        value= {props.toDo}
      />
      <Button variant="light" onClick={()=>{ props.addHomework(props.toDo) }}>Add</Button>
    </InputGroup>
  );
};

export default useTodoForm;
