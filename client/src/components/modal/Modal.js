import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import "./style.css";
import axios from "axios";

class Modal extends Component {
  state = {
    selectedFile: null
  };

  fileUpload = e => {
    const files = Array.from(e.target.files);

    const formData = new FormData();
    formData.append(0,files[0]);

    fetch(`http://localhost:3001/image-upload-single`, {
      method: "POST",
      body: formData
    }).then(res => {
        console.log("we made it");
      if (!res.ok) {
        throw res;
      }
      return res.json();
    });
    // .then(res =>{
        //db code 
        //add img url to db
        //img url will be a property on res parameter  
    // });
  };
  render() {
    return (
      
      <React.Fragment>
        <form>
          <div className="form-group" style={{display:"inline-block"}} >
        
            <input 
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              onChange={this.fileUpload}
            />  
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Modal;
