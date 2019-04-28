
import React, {Component} from "react";



class home extends Component {
    render() {
        return (
            <div>
                <fb:login-button 
                  scope="public_profile,email"
                   onlogin="checkLoginState();">
                  </fb:login-button>
            </div>
        );
    }
}
function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
}
export default home;

