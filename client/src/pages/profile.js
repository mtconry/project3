import React, { Component } from 'react';
// import Profile from "../components/profilePic/profile"
import Modal from "../components/modal/Modal"
import Axios from "axios"
import { userInfo } from 'os';
import "./style.css"

class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {users: [0]};
      }

      componentDidMount() {
        Axios.get("/api/user/").then(res => {
            this.setState({
                users: res.data
            });
        })
    }
    render() {
        return (
        <div>
            <h1 className="notWorking">PAGE UNDER CONSTRUCTION!</h1>
            { this.state.users.map((user,i )=> (
            <div key= {i} className="card" style={{width:"18rem"}}>
                <img src={user.imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            ))}
        </div>

         );
    }
 }
        
export default profile;