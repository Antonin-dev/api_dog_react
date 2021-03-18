import React from "react";
import "./App.scss";
import Aside from "./View/Aside";
import ViewContainer from "./View/ViewContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/dog/:id">
            <Aside />
            <ViewContainer />
          </Route>
          <Route path="/">
            <Aside />

          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
