import React, { Component } from "react";
import "../src/style.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Footer from "./components/footer/Footer"
import "./components/footer/style.css"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/home.js";
import Profile from "./pages/profile";
import HotSpots from "./pages/hotspots";
import Recent from "./pages/recent";
import Login from "./pages/login";
import "./style.css"
import "./components/Navbar/style.css"
// import Nomatch from "./pages/Nomatch";


class App extends Component {
state={
  login: true
}

  render() {
    return (
      <div>
        <Navbar login={this.state.login}/>
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


// Facebook login script

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});