import React, { Component } from "react";
class WRButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                backgroundColor: 'white'
            }
        };

    }

    clickButton = () => {
        this.setState({
            style: {
                backgroundColor: 'yellow'
            }
        });
        this.props.clickButton(this.props.type, this.props.value);
    }

    componentDidMount() {
        if (this.props.value === 0) {
            this.setState({
                style: {
                    backgroundColor: 'yellow'
                }
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.watching !== prevProps.watching && this.props.watching !== this.props.value) {
            this.setState({
                style: {
                    backgroundColor: 'white'
                }
            });
        }
    }

    render() {
        return (
            <button onClick={this.clickButton} className="WRButton" style={{ backgroundColor: this.state.style.backgroundColor }}>{this.props.text}</button>
        );
    }

}

export default WRButton