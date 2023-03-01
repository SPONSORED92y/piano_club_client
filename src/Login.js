import React, { Component } from "react";
// import SignUp from "./SignUp";
class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      submit: ['', ''],
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

  onSubmit = (e) => {
    e.preventDefault();
    // TODO: Fetch API
    window.location.href = "/Reserve";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">Username</label>
          <input onChange={this.handleChangeUsername} value={this.state.username} type="text" name="username" />
          <label htmlFor="password">Password</label>
          <input onChange={this.handleChangePassword} value={this.state.password} type="password" name="password" />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
