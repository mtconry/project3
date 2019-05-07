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
  

    render() {



        return (
            <div>
                {/* <input style={{display: "none"}} 
                type="file"  
                onChange={this.fileChangeHandler} 
                ref={fileInput => this.fileInput = fileInput}/>
                <button onClick={() => this.fileInput.click()} >Pick file</button>
                <button onClick={this.fileSelectedHandler}>Upload</button> */}
                <div className="card">
                <div className="container">
      <img src="http://fillmurray.com/g/300/300" id="img-preview" />
      <label className="file-upload-container" htmlFor="file-upload">
        <input style={{display:"none"}}
        id="file-upload" 
        type="file" 
        onChange = {this.fileChangeHandler}
        ref={fileInput => this.fileInput = fileInput}
        />
        <button onClick={() => this.fileInput.click()} >Pick file</button>
         <button onClick={this.fileSelectedHandler}>Upload</button>
        
      </label>
    </div>
    </div>

            </div>
        );
    }
}

export default Modal;