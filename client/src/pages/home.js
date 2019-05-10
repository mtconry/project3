
import React, {Component} from "react";

import Modal from "../components/modal/Modal"
import HotSpots from "../pages/hotspots";




class home extends Component {
    render() {
        return (
            <div>
            <Modal/>
            <HotSpots/>
            </div>
        );
    }
}

export default home;

