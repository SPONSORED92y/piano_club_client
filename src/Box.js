import React, { Component } from "react";
import Popup from "./Popup"
class Box extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trigger: 0,
            style: { color: 'black', backgroundColor: 'white' }
        };
        this.cancel = this.cancel.bind();
    };

    clickBox = () => {
        this.setState({ trigger: 1 });
    }

    cancel = () => {
        this.setState({ trigger: 0 });
    }

    render() {
        return (
            <div>
                <Popup cancel={this.cancel} trigger={this.state.trigger} period={this.props.period} ></Popup>
                <button onClick={this.clickBox} style={{ color: this.state.style.color, backgroundColor: this.state.style.backgroundColor }}>{this.props.user}</button>
            </div>
        );
    }
}

export default Box;
