import React, { Component } from 'react';
import "./style.css"
import axios from "axios";



class Modal extends Component {
    state = {
        selectedFile: null
    }

    
fileChangeHandler = event =>{
    this.setState({
        selectedFile: event.target.files[0]
    })
}

fileSelectedHandler = () =>{
    const fd = new FormData();
    console.log(this.state.selectedFile)
fd.append("image", this.state.selectedFile)
    axios.post("/profile",fd, {headers: {"Content-Type":"multipart/form-data"}})
    .then(res=>{
        console.log(res)   
    })
}

fileUpload=(params) =>{

    fetch("https://api.cloudinary.com/v1_1/ucf-full-stack-coding-bootcamp/image/upload").then().then()
    
}
    render() {
        return (
           <React.Fragment>
                <form>
            <div class="form-group">
              <label for="exampleFormControlFile1">Example file input</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </div>
          </form>
           </React.Fragment>
        );
    }
}

export default Modal;