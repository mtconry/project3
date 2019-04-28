import React, { Component } from 'react';
import "./style.css";

class profile extends Component {
    render() {
        return (
            // <div className="container">
            //     <div className="wrapper">
            //     <div className = "jumbotron">

            //     </div>
            //     </div>
            // </div>

            <div className="container">
            <div className="jumbotron">
              <div className="profilePic">image goes here
                <img src="" alt=""/>
               </div>
              <div>User Name</div>
            </div>
          </div>
        );
    }
}

export default profile;