import React from "react";
// import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
    let navContent = "";
    if (props.login) {
      navContent = (<ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/hotspots">HotSpots <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/recent">Recent</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/profile">Profile</a>
      </li>
    </ul>)
    }
    return (
        <nav class="navbar navbar-expand-lg " id="hello" >
        <a class="navbar-brand" href="/home">Check-N-Go</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
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

