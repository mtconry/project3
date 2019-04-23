import React, { Component } from "react";
import "../src/style.css";
import Navbar from "./components/Navbar"

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Profile" component={Profile} />
              <Route path="/HotSpots" component={HotSpots} />
              <Route path="/Recent" component={Recent} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;


