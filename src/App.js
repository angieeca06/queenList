import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import TodoForm from "./Components/TodoForm"

const App = () => {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <TodoForm />}/>
          </Switch>
        </div>
      </HashRouter>
    );
};

export default App;
