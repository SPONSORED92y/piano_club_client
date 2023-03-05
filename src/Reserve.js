import React, { Component } from "react";
import Box from "./Box";
import Template from "./Template";
import WRButton from "./components/WRButton";

class Reserve extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: {
                week: 0,
                room: 0,
            },
            data: Template,
            user: {
                name: '',
                times: 7,
            }
        };

        this.clickButton = this.clickButton.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

    };

    clickButton = (w, n) => {
        if (w === 'w') {
            //if it's a week button
            this.setState(
                {
                    display: {
                        week: n,
                        room: this.state.display.room,
                    }
                });
        } else {
            this.setState(
                {
                    display: {
                        week: this.state.display.week,
                        room: n,
                    }
                });
        }


    };

    componentDidMount() {
        const fetchCall = async () => {
            const url = await this.props.serverAddress + `Reserve`;
            const token = await this.props.getLoginToken();
            const response = await fetch(url, {
                mode: 'cors',
                method: "GET",
                headers:
                {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    "Authorization": token,
                }
            });

            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson ? await response.json() : null;
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = response.status;
                return Promise.reject(error);
            }
        }

        fetchCall().catch(error => {
            console.error('There was an error!', error);
            this.setState(
                { err: 'wrong username or password' }
            );
        });

    }




    render() {
        return (
            <div>
                <div>room: {this.state.display.room}</div>
                <div>week: {this.state.display.week}</div>
                <div className="weekButtonContainer">
                    <WRButton clickButton={this.clickButton} text="This week" value={0} type='w' watching={this.state.display.week} />
                    <WRButton clickButton={this.clickButton} text="Next week" value={1} type='w' watching={this.state.display.week} />
                    <WRButton clickButton={this.clickButton} text="Next next week" value={2} type='w' watching={this.state.display.week} />
                </div>
                <div>
                    <WRButton clickButton={this.clickButton} text="room 1" value={0} type='r' watching={this.state.display.room} />
                    <WRButton clickButton={this.clickButton} text="room 2" value={1} type='r' watching={this.state.display.room} />
                    <WRButton clickButton={this.clickButton} text="room 3" value={2} type='r' watching={this.state.display.room} />
                    <div className="boxContainer">
                        <div className="boxContainerDay"><div>Monday</div>{this.state.data[this.state.display.room][this.state.display.week][0]}</div>
                        <div className="boxContainerDay"><div>Tuesday</div>{this.state.data[this.state.display.room][this.state.display.week][1]}</div>
                        <div className="boxContainerDay"><div>Wednesday</div>{this.state.data[this.state.display.room][this.state.display.week][2]}</div>
                        <div className="boxContainerDay"><div>Thursday</div>{this.state.data[this.state.display.room][this.state.display.week][3]}</div>
                        <div className="boxContainerDay"><div>Friday</div>{this.state.data[this.state.display.room][this.state.display.week][4]}</div>
                        <div className="boxContainerDay"><div>Saturday</div>{this.state.data[this.state.display.room][this.state.display.week][5]}</div>
                        <div className="boxContainerDay"><div>Sunday</div>{this.state.data[this.state.display.room][this.state.display.week][6]}</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Reserve;
