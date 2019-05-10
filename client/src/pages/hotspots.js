import React, { Component } from 'react';
import users from '../pseudoUsers.json';
import Axios from 'axios';

class HotSpots extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
      }

    componentDidMount() {
        Axios.get("/api/user").then(res => {
            this.setState({
                users: res.data
            });
        })
    }

    render() {
        return (
            <div className="container">
            <div className ="row">
            { this.state.users.map((user,i )=> (
      
      <div key={i} className="card">
                <img className="card-img-top" src={user.imageUrl} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
            </div>
        </div>
       
            ))}
</div>
            </div>
        );
    }
}

export default HotSpots;