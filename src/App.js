import React, { Component } from "react";
import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import AddJob from "./medication/addJob/AddJob";
import ViewJob from "./medication/viewJob/ViewJob";
import Audit from "./medication/audit/Audit";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1 className="header">Medication</h1>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="nav-link">Add Job </Link>
              <Link to={'/view'} className="nav-link">View Jobs</Link>
              <Link to={'/audit'} className="nav-link">Create Medication Audit</Link>
              <Link to={'/auditLog'} className="nav-link">Medication Audit Records</Link>
          </nav>
          <Switch>
              <Route exact path='/' component={AddJob} />
              <Route path='/view' component={ViewJob} />
              <Route path='/audit' component={Audit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
