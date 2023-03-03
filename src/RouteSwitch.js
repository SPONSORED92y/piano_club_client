import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Reserve from "./Reserve";
const serverAddress = "http://localhost:5000/"
class RouteSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginToken: ''
        }
        this.setLoginToken = this.setLoginToken.bind();
    }
    setLoginToken = (token) => {
        this.setState({ loginToken: token });
        console.log("token saved");
    }
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/Login" />} />
                    <Route path="/Login" element={<Login loginToken={this.state.loginToken} setLoginToken={this.setLoginToken} serverAddress={serverAddress} />} />
                    <Route path="/SignUp" element={<SignUp serverAddress={serverAddress} />} />
                    <Route path="/Reserve" element={<Reserve serverAddress={serverAddress} />} />
                </Routes>
            </BrowserRouter>
        );
    }
};

export default RouteSwitch;