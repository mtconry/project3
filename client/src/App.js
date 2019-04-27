import React, { Component } from "react";
import "../src/style.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/home.js";
import Profile from "./pages/profile";
import HotSpots from "./pages/hotspots";
import Recent from "./pages/recent";
import Login from "./pages/login";
import Profilepic from "./components/profilePic/profile";
import "./style.css"
import "./components/Navbar/style.css"
// import Nomatch from "./pages/Nomatch";


class App extends Component {
state={
  login: false
}

  render() {
    return (
      <div>
        <Navbar login={this.state.login}/>
        <Profilepic/>
      <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/Profile" component={Profile} />
              <Route path="/HotSpots" component={HotSpots} />
              <Route path="/Recent" component={Recent} />
              {/* <Route component={Nomatch} /> */}
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;


