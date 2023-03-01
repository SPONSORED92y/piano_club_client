import React, { Component } from "react";
class Box extends Component {
    constructor() {
        super();

        this.state = {
            state:'',
            user:'',
            style:{color:'black',backgroundColor:'gray'}
        };

    };

clickBox=()=>{

}

    render() {
        return (
            <div>
<button onClick={this.clickBox} style={{color:this.state.style.color,backgroundColor:this.state.style.backgroundColor}}>{this.state.user}</button>
            </div>
        );
    }
}

export default Box;
