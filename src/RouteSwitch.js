import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Reserve from "./Reserve";
const serverAddress = "http://localhost:5000/"

class RouteSwitch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/Login" />} />
                    <Route path="/Login" element={<Login loginToken={this.props.loginToken} setLoginToken={this.props.setLoginToken} serverAddress={serverAddress} setUser={this.props.setUser} />} />
                    <Route path="/SignUp" element={<SignUp serverAddress={serverAddress} />} />
                    <Route path="/Reserve" element={<Reserve loginToken={this.props.loginToken} serverAddress={serverAddress} getLoginToken={this.props.getLoginToken} setUser={this.props.setUser} getUser={this.props.getUser} />} />
                </Routes>
            </BrowserRouter>
        );
    }
};

export default RouteSwitch;