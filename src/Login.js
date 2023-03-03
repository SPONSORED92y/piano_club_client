import React, { Component } from "react";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      err: '',
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
    fetch(this.props.serverAddress + `Login`, {
      mode: 'cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({ username: this.state.username, password: this.state.password })
    })
      .then((response) => {
        if (response.status < 500) {
          console.log("Login success")
          window.location.href = "/Reserve";
        } else {
          this.setState(
            { err: 'wrong username or password' }
          );
        }
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
        <a href="/SignUp">SignUp</a>
        <div>{this.state.err}</div>
      </div>
    );
  }
}

export default Login;
