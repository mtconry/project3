import React from 'react';
import "./style.css";

function Profile(props) {
  let profileJumbo = "";
  if(props.profileJumbo){
    profileJumbo = (<div
      className="jumbotron" >
    </div>
    )
  }else{

  }
        return (
            <div className="container">
            <div className="jumbotron">
              <div className="profilePic">image goes here
                <img src="" alt=""/>
                {profileJumbo}
               </div>
              <div>User Name</div>
            </div>
            <div class="card border-primary mb-3" id="map">
  <div class="card-header text-primary">Places I've visited</div>
  <div class="card-body text-primary">
    </div>
  </div>
 
          </div>
          
        );
    }


export default Profile;