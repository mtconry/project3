import React, { Component } from 'react';






class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="wrapper">
                <h1>Connect and Ask Locals</h1>
                
                </div>
               <div className="signUp">
                    <h1>Sign-Up</h1>
                    <div className="container" id="fb-google">
                    <button type="button" class="btn btn-success">Google</button>
                    <p>---------------------------------------------------</p>
                    <br/>
                    <button type="button" class="btn btn-primary">Facebook</button>
                    </div>
                   </div> 

            </div>
        );
    }
}

export default Login;