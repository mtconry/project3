// /*global FB*/
import React, {Component} from "react";

import Modal from "../components/modal/Modal"
// const FB = window.FB



class home extends Component {
    render() {
        return (
            <div>
            <Modal/>
            </div>
        );
    }
}
// function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
// }
export default home;

