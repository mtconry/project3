import React, { Component } from 'react';
import users from '../pseudoUsers.json';
import Axios from 'axios';

class recent extends Component {
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
      <div key={i} className="card text-center" style={{width: "70rem", textAlign:"center", minHeight:"400px"}}>
        <div className="card-body">
        <div className="row">
            <div className= "col-sm-4">
                <h5 className="card-title">{user.name}</h5>
                <img src={user.imageUrl} className="card-img-top" alt="..."/>
                <br/>
                <a href="./profile" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className= "col-sm-8">
                <img src={user.imageUrl} />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
  </div>
            ))}
</div>
            </div>
        );
    }
}

export default recent;