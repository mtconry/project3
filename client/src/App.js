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