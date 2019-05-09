import React, { Component } from 'react';

class recent extends Component {
    render() {
        return (
            <div className="container">
            <div className ="row">
            <div className= "col-sm-4">
      <div className="card text-center" style={{width: "70rem", textAlign:"center", height:"400px"}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <img src="" className="card-img-top" alt="..."/>
    </div>
    <div className= "col-sm-4">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div className= "col-sm-4">
    <a href="./profile" className="btn btn-primary">Go somewhere</a>
    
  </div>
  </div>
  </div>
</div>
            </div>
        );
    }
}

export default recent;