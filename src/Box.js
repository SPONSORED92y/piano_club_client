import React, { Component } from "react";
import Popup from "./Popup"
class Box extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trigger: 0,
            style: { color: 'black', backgroundColor: 'white' },
            disable: '',
            action: ''
        };
        this.cancel = this.cancel.bind();
    };

    clickBox = () => {
        this.setState({ trigger: 1 });
    }

    cancel = () => {
        this.setState({ trigger: 0 });
    }

    componentDidMount() {
        if (this.props.state === "Available") {
            this.setState({ action: "Reserve", disable: "false" })
        } else if (this.props.user === this.props.getUser()) {
            this.setState({ action: "CancelReserve", disable: "false" })
        } else if (this.props.user !== this.props.getUser()) {
            this.setState({ action: "NoPopup", disable: "true" })
        }
    }

    render() {
        return (
            <div>
                <Popup
                    cancel={this.cancel}
                    trigger={this.state.trigger}
                    period={this.props.period}
                    getUser={this.props.getUser}
                    index={this.props.index}
                    serverAddress={this.props.serverAddress}
                    getLoginToken={this.props.getLoginToken}
                    action={this.state.action}
                    refresh={this.props.refresh}
                    fetchData={this.props.fetchData}

                    name={this.props.user}
                />
                <button
                    className="box"
                    onClick={this.clickBox}
                    style={{ color: this.state.style.color, backgroundColor: this.state.style.backgroundColor }}
                    disable={this.state.disable}
                >{this.props.user}</button>
            </div>
        );
    }
}

export default Box;
