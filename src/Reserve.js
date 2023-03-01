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
                    <div className="boxContainer">
                        {this.state.data[this.room][this.state.week][0]}
                        {this.state.data[this.room][this.state.week][1]}
                        {this.state.data[this.room][this.state.week][2]}
                        {this.state.data[this.room][this.state.week][3]}
                        {this.state.data[this.room][this.state.week][4]}
                        {this.state.data[this.room][this.state.week][5]}
                        {this.state.data[this.room][this.state.week][6]}
                    </div>

                </div>
            </div>
        );
    }
}

export default Reserve;
