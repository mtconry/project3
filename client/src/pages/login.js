import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import  Login  from './home';




// initiate restful api to capture signup
class Login extends Component {

    constructor(props){
        super(props);
        this.stats={
            redirect: false
        }
        this.signup = this.signup.bind(this);
    }

    signup(res, type){
        let postData;
        if(type === 'facebook' && res.email){
            postData = {name: res.name, provider: type, email: res.email, provider_id: res.id, token: res.accessToken, provider_pic: res.provider_pic}
        }
        if(type === 'google' && res.w3.U3){

        }
    PostData('signup',postData).then((result)=>{
        let responseJson = result;
        if(responseJson.userData){

        sessionStorage.setItem('userData', JSON.stringnify(responseJson));
        this.setState({redirectToRefferer: true});
        }
    });

    }

    render() {
        if(this.state.redirectToRefferer){
            return ( <redirect to { ...'/home' } /> )
        }

        const responseFacebook = (response) => {
            console.log(response);
            this.signup(response, 'facebook');
          }

        const responseGoogle = (response) => {
            console.log(response);
            this.signup(response, 'google');
          }

        return (
            <div className="container">
                <div className="wrapper">
                    <h1>Connect and Ask Locals</h1>
                
                </div>
               <div className="Welcome">
                    <h1>Welcome</h1>
                                           
                    <a href='/login' className='button'>login</a>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_API_KEY}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        />,
                    <FacebookLogin
                        appId={process.env.REACT_APP_FB_APP_ID}
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook} />,

                    <a href='/signup' className='button'>Signup</a>


                   </div> 

            </div>
        );
    }
}

export default Login;