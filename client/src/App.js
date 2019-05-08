import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import ReactDOM from 'react-dom';
import "../src/style.css";
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom";
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
// import Nomatch from "./pages/Nomatch";
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


class App extends Component {
// // state={
// //   login: true
// // }
// // const home = () =>(
// //   <h2>HOME</h2>
// // )
// // const about = props => {
// //   console.log(props.match.params.id)
// //   return(
// //     <h2>ABOUT</h2>
// //   )
// // }

// // const responseFacebook = (response) => {
// //   console.log(response);
// // }
// //     ReactDOM.render(
// //                 <FacebookLogin
// //                   appId={process.env.REACT_APP_FB_APP_ID}
// //                   autoLoad={true}
// //                   fields="name,email,picture"
// //                   callback={responseFacebook}
// //                   cssClass="my-facebook-button-class"
// //                   icon="fa-facebook"
// //                 />
// //                 // {/* document.getElementById('demo') */}
// //               );
// // ReactDOM.render(
// //   <FacebookLogin
// //     appId={process.env.REACT_APP_FB_APP_ID}
// //     autoLoad={true}
// //     fields="name,email,picture"
// //     onClick={componentClicked}
// //     callback={responseFacebook} />,
// //   document.getElementById('demo')
// // );

// const PrivateRoute = ({component: Component, user, ...rest}) => {
//   return (
//     <Route
//     {...rest}
//     render={(props)=> user
//       ? <Component {...props} {...rest} user={user} />
//       : <Redirect to = {{pathname: '/', state: {from:props.location}}} />}
//       // : <Redirect to '/' />
//     />
//   )
// }

// class App extends Component {
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
          <header className="Navbar">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div>
              <Link to="/">Home</Link>
              <Link to="/Profile">Profile</Link>
              <Link to="/HotSpots">HotSpots</Link>
              <Link to="/Recent">Recent</Link>
              {/* {/* <Link to="/Post">Post</Link> */} 
            </div>
            {
              this.state.loggedIn
              ? <button onClick={this.logout}>Logout</button>
              :<GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_API_KEY}
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}/>
            }

            
            

          </header>
          <Route path="/home" component={Home} />
          <Route path="/Profile" component={Profile} />
          <Route path="/HotSpots" component={HotSpots} />
          <Route path="/Recent" component={Recent} />
          {/* <PrivateRoute user={this.state.loggedIn} exact path='/dash' component={protected2}/> */}
        </div>
      </Router>
    );
  }
};

//   // onFacebookLogin = (loginStatus, resultObject) => {
//   //   if (loginStatus === true) {
//   //     this.setState({
//   //       username: resultObject.user.name
//   //     });
//   //   } else {
//   //     alert('Facebook login error');
//   //   }
//   // }

 

//   render() {
//     return (
//       <div>
//         <Navbar login={this.state.login}/>
//       <Router>
//             <Switch>
//               {/* <Route exact path="/" render={() => ( */}
//                 {/* // <Login onFacebookLogin = {this.onFacebookLogin} /> */}
//               {/* // )} /> */}
//               <Route path="/home" component={Home} />
//               <Route path="/Profile" component={Profile} />
//               <Route path="/HotSpots" component={HotSpots} />
//               <Route path="/Recent" component={Recent} />
              
//               {/* <Route component={Nomatch} /> */}
//             </Switch>
//           </Router>
         
//       </div>
//     );
//   };
// }

export default App;



