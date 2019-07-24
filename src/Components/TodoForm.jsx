import React, { useState } from "react";
import {InputGroup , FormControl} from "react-bootstrap";

const useTodoForm = () => {

  const [toDo, setToDo] = useState("");

  const handleToDo = (e) => {
    setToDo(e.target.value);
  };
  console.log(toDo)

  return (
    <InputGroup className="mb-3">
      <FormControl aria-label="Text input with checkbox" type="text" onChange={handleToDo}/>
    </InputGroup>
  );

}

export default useTodoForm;