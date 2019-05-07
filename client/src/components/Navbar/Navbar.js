import React from "react";
// import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
    let navContent = "";
    if (props.login) {
      navContent = (<ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/hotspots">HotSpots <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/recent">Recent</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/profile">Profile</a>
      </li>
    </ul>)
    }
    return (
        <nav className="navbar navbar-expand-lg " id="hello" >
        <a className="navbar-brand" href="/home">Check-N-Go</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {navContent}
          
        </div>
        <div>
            <form className="form-inline justify-content-right">
    <input className="form-control" id="user" type="text" name="name" placeholder="Username" />
    <input type="password" name="password" id="password" placeholder="Password" />
     <input className="login" type="submit" value="Login" />
</form>
</div>
      </nav>
    );
  }
export default Navbar;

