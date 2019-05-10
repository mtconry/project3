import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import ReactDOM from 'react-dom';
import "../src/style.css";
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
// import Footer from "./components/footer/Footer"
import "./components/footer/style.css"
// import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/home.js";
import Profile from "./pages/profile";
import HotSpots from "./pages/hotspots";
import Recent from "./pages/recent";
// import Login from "./pages/login";
import "./style.css";
import "./components/Navbar/style.css";
import Modal from "./components/modal/Modal";


// import Nomatch from "./pages/Nomatch";


class App extends Component {
  constructor(props) {
    super(props) 
    console.log(this.props)
    const id = localStorage.getItem('id');
    this.state= {
      loggedIn: id ? true : false
    }
  }
  componentDidMount() {
//     // api calls here
//     // set response to state
  }
  responseGoogle = (res) => {
    console.log(res) //Axios call to backend 
    localStorage.setItem('id', res.googleId);
    this.setState({
      loggedIn: true
    })
  }
  logout = () => {
    localStorage.clear();
    this.setState({
      loggedIn: false
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="Navbar-nav">
            <div className="navi">
            <a className="navbar-brand" href="/home">Check-N-Go</a>
              {this.state.loggedIn
              ?<div style={{ display:"inline-block" }}>
              <Link to="/">Home</Link>
              <Link to="/Profile">Profile</Link>
              <Link to="/HotSpots">HotSpots</Link>
              <Link to="/Recent">Recent</Link>
              <Modal/>
              </div>
              : ""
              }
              {
              this.state.loggedIn
              ? <button  onClick={this.logout}>Logout</button>
              :<GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_API_KEY}
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                
                /> 
            } 

            </div>
            
            
          </header>
          
          
          <Route path="/home" component={Home} />
          <Route path="/Profile" component={Profile} />
          <Route path="/HotSpots" component={HotSpots} />
          <Route path="/Recent" component={Recent} />
        </div>
      </Router>
      
    );
  }
};

export default App;





