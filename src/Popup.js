import React, { Component } from "react";
class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                visibility: 'hidden'
            },
            name: '',
            period: '',
        };

    };
    clickYes = () => {
        this.setState({
            style: { visibility: "hidden" },
        }
        );
        this.props.cancel();
    }

    clickCancel = () => {
        this.setState({
            style: { visibility: "hidden" },
        }
        );
        this.props.cancel();
    }

    componentDidUpdate(prevProps) {
        if (this.props.trigger !== prevProps.trigger && this.props.trigger === 1) {
            this.setState({
                style: {
                    visibility: "visible"
                }
            });
        }
    }
    componentDidMount() {
        var p = '';
        switch (this.props.period) {
            case 0:
                p = '08:00~09:00'
                break;
            case 1:
                p = '09:00~10:00'
                break;
            case 2:
                p = '10:00~11:00'
                break;
            case 3:
                p = '11:00~12:00'
                break;
            case 4:
                p = '12:00~13:00'
                break;
            case 5:
                p = '13:00~14:00'
                break;
            case 6:
                p = '14:00~15:00'
                break;
            case 7:
                p = '15:00~016:00'
                break;
            case 8:
                p = '16:00~17:00'
                break;
            case 9:
                p = '17:00~18:00'
                break;
            case 10:
                p = '18:00~19:00'
                break;
            case 11:
                p = '19:00~20:00'
                break;
            case 12:
                p = '20:00~21:00'
                break;
            case 13:
                p = '21:00~22:00'
                break;
        }
        this.setState({
            period: p
        });
    }

    render() {
        return (
            <div>
                <div className="cover" style={{ visibility: this.state.style.visibility }} ></div>
                <div className="PopupContainer">
                    <div className="Popup" style={{ visibility: this.state.style.visibility }}>
                        <div>Times left:</div>
                        <div>Period: {this.state.period}</div>
                        <div><button onClick={this.clickYes}>Yes</button><button onClick={this.clickCancel}>Cancel</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;
