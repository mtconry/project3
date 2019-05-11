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
                <img src={user.imageUrl} className="card-img-top"  alt="..."  style={{ maxHeight:"100px", width:"100px" }}/>
                <br/>
                <a href="/profile" className="btn btn-primary">profile</a>
            </div>
            <div className= "col-sm-8">
                <img src={user.url} style={{ maxHeight:"400px" ,width:"300px"}} />
            </div>
        </div>
        <div className="row">
        <div className="col-4"></div>

            <div className="col-8" >
                <p className="card-text" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis condimentum urna. Phasellus vulputate nunc consequat fermentum hendrerit. Vivamus facilisis mi velit, in dictum ex ultricies eget. Mauris sed nibh.

</p>
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