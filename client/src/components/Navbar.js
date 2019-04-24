import React from "react";
// import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="../pages/home">Check-N-Go</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="../pages/hotspots">HotSpots <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../pages/recent">Recent</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../pages/profile">Profile</a>
            </li>
            <div>
            <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="text" name="name" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
     <input type="submit" value="Submit" />
</form>
</div>
          </ul>
          
        </div>
      </nav>
    );
  }
export default Navbar;

