import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
// import { Contact } from "./components/Contact";
import { Project } from "./components/Project";
import { Search } from "./components/Search";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchedProject } from "./components/SearchedProject";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path="/project/:projectName" exact>
            <Project />
          </Route>
          <Route path="/:el" exact>
            <SearchedProject />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
