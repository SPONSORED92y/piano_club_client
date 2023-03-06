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
        var disable;
        var mode;
        if (this.props.state != "Available") {
            mode = "Reserve";
            disable = false;
        } else if (this.props.user == this.props.loginUser) {
            mode = "CancelReserve";
            disable = false;
        } else if (this.props.user == this.props.loginUser) {
            mode = "NoPopup"
            disable = true;
        }
        return (
            <div>
                <Popup
                    cancel={this.cancel}
                    trigger={this.state.trigger}
                    period={this.props.period}
                    loginUser={this.props.loginUser}
                    index={this.props.index}
                    serverAddress={this.props.serverAddress}
                    getLoginToken={this.props.getLoginToken}
                    mode={mode}
                    refresh={this.props.refresh}
                />
                <button onClick={this.clickBox}
                    style={{ color: this.state.style.color, backgroundColor: this.state.style.backgroundColor }}
                    disable={disable}
                >{this.props.user}</button>
            </div>
        );
    }
}

export default Box;
