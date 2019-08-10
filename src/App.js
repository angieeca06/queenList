import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import ToDoComponent from "./Components/ToDo";

const App = () => {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <ToDoComponent />}/>
          </Switch>
        </div>
      </HashRouter>
    );
};

export default App;
