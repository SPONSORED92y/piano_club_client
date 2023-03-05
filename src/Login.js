import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Reserve from "./Reserve";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'jojo',
      password: '123',
      err: '',
      redirect: 0,
    };

  };

  handleChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onSubmit = () => {
    const fetchCall = async () => {
      const url = await this.props.serverAddress + `Login`;
      const response = await fetch(url, {
        mode: 'cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify({ username: this.state.username, password: this.state.password })
      });
      const isJson = response.headers.get('content-type')?.includes('application/json');
      const data = isJson ? await response.json() : null;
      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = response.status;
        return Promise.reject(error);
      }
      this.props.setLoginToken(data.token);
      this.setState(
        { redirect: 1 }
      );

    }
    fetchCall().catch(error => {
      console.error('There was an error!', error);
      this.setState(
        { err: 'wrong username or password' }
      );
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="username">Username</label>
        <input onChange={this.handleChangeUsername} value={this.state.username} type="text" name="username" />
        <label htmlFor="password">Password</label>
        <input onChange={this.handleChangePassword} value={this.state.password} type="password" name="password" />
        <button onClick={this.onSubmit}>Log in</button>
        <a href="/Reserve">Reserve</a>
        <a href="/SignUp">SignUp</a>
        <div>{this.state.err}</div>
        {this.state.redirect ? <Navigate to="/Reserve" /> : null}

      </div>
    );
  }
}

export default Login;
