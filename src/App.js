import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Contentpage from "./Pages/Contentpage";
import Typewriter from "typewriter-effect";

import { FaFastForward } from "react-icons/fa";
import { IconContext } from "react-icons";
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
      </Switch>
    </Router>
  );
}

export default App;
