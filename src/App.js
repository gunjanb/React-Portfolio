import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import Contentpage from "./Pages/ContentPage/Contentpage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/content">
          <Contentpage />
        </Route>
        <Route>
          <Redirect to path="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
