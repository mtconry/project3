import React from "react";

function Jumbotron(props) {
  let jumbo = "";
  if(props.jumbo){
    jumbo = (<div
      className="jumbotron" >
    </div>

    )
  }
  return (
    <div>
      {jumbo}
    </div>
  );
}

export default Jumbotron;
