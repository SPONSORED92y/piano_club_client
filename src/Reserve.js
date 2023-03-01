import React, { Component } from "react";
import Template from "./Template";
class Reserve extends Component {
    constructor() {
        super();

        this.state = {
            display: {
                week: 0,
                room: 1,
            },
            data: Template,
        };

    };

    clickWeek0 = () => {
        this.setState({
            display: {
                week: 0,
                room: this.state.room
            }
        });
    };

    clickWeek1 = () => {
        this.setState({
            display: {
                week: 1,
                room: this.state.room
            }
        });
    };

    clickWeek2 = () => {
        this.setState({
            display: {
                week: 2,
                room: this.state.room
            }
        });
    };

    render() {
        return (
            <div>
                <div className="weekButtonContainer">
                    <button onClick={this.clickWeek0} className="weekButton0">This week</button>
                    <button onClick={this.clickWeek1} className="weekButton1">Next week</button>
                    <button onClick={this.clickWeek2} className="weekButton2">Next next week</button>
                </div>
                <div>
                    <div className="roomButton1"></div>
                    <div className="roomButton2"></div>
                    <div className="roomButton3"></div>
                    <div className="tableContainer">
                        <div className="day1"><div className="" /></div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Reserve;
