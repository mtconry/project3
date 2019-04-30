import React, { Component } from 'react';
import "./style.css"
import axios from "axios";

class Modal extends Component {
    state = {
        seletedFile: null
    }

fileSelectedHandler = event =>{
    this.setState({
        seletedFile: event.target.files[0]
    })
}

fileSelectedHandler = () =>{
    const fd = new FormData();
fd.append("image", this.state.seletedFile, this.state.seletedFile.name)
    axios.post("",fd)
    .then(res=>{
        console.log(res)   
    })
}

    render() {
        return (
            <div>
                <input style={{display: "none"}} 
                type="file"  
                onChange={this.fileSelectedHandler} 
                ref={fileInput => this.fileInput = fileInput}/>
                <button onClick={() => this.fileInput.click()} >Pick file</button>
                <button onClick={this.fileSelectedHandler}>Upload</button>
            </div>
        );
    }
}

export default Modal;