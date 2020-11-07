import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Course from "./containers/Course/Course";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/courses/:id/:title" component={Course} />
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route
            render={(props) => {
              return (
                <div>
                  <h1>Not Found</h1>
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
