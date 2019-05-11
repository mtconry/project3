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
            <div className="container" style={{textAlign:"center"}}>
            <div className ="row" style={{textAlign:"center"}}>
            { this.state.users.map((user,i )=> (
      
      <div key={i} className="card" >
                <img className="user-img" src={user.imageUrl} style={{textAlign:"center", maxHeight:"100px" ,width:"100px",paddingLeft:"10px", paddingTop:"10px", borderRadius:"75%"}} alt="userUpload"/>
                <h3 className="card-title" style={{textAlign:"left", padding:"10px"}}>{user.name}</h3>
                <div>
                <img className="card-img-top" src={user.url} style={{ maxHeight:"600px" ,width:"600px"}}  alt="Card image cap"/>
                <div className="card-body">
                
                
                <p className="card-text" style={{textAlign:"center",paddingBottom:"15px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et sapien vitae ipsum ornare rhoncus. Nam rhoncus augue vitae urna.</p>
                </div>
            </div>
        </div>
       
            ))}
</div>
            </div>
        );
    }
}

export default HotSpots;