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
    clickYesReserve = () => {
        this.setState({
            style: { visibility: "hidden" },
        }
        );

        const fetchCall = async () => {
            const url = await this.props.serverAddress + `Reserve`;
            const token = await this.props.getLoginToken();
            const response = await fetch(url, {
                mode: 'cors',
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    "Authorization": token,
                },
                body: JSON.stringify({ index: this.props.index, action: this.props.action, name: this.props.getUser().name })
            });

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = response.status;
                return Promise.reject(error);
            }
        }
        fetchCall().catch(error => {
            console.error('There was an error!', error);
        });
        this.props.cancel();
        this.props.fetchData();
        this.props.refresh();
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
            default:
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
        var t = this.props.getUser().times;
        return (
            <div>
                <div className="cover" style={{ visibility: this.state.style.visibility }} ></div>
                <div className="PopupContainer">
                    <div className="Popup" style={{ visibility: this.state.style.visibility }}>
                        <div>{(this.props.action === "Reserve") ? "Reserve room" : "Cacel Reservation"}</div>
                        <div>index: {this.props.index}</div>
                        <div>name: {this.props.name}</div>
                        <div>Times left: {t}</div>
                        <div>Period: {this.state.period}</div>
                        <div><button onClick={this.clickYesReserve}>Yes</button><button onClick={this.clickCancel}>Cancel</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;
