
import React, {Component} from "react";



class home extends Component {
    render() {
        return (
            <div>

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

