import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Builder from "./components/Builder";
// import Viewer from "./components/Viewer";
import DashBoard from "./components/Dashboard";
import SharedScene from "./components/SharedScene"

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={DashBoard} />
      <Route exact path="/builder/:id" component={Builder} />
      <Route exact path="/viewer/:id" component={SharedScene} />
    </Switch>
  </Router>
)

export default App
