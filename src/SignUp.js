import React, { Component } from "react";

class Sign_up extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            department: '',
            studentID: '',
            role: '',
            err: '',
        };

        this.onSubmit = this.onSubmit.bind();
    }
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
    handleChangeConfirmPassword = (e) => {
        this.setState({
            confirmPassword: e.target.value,
        });
    };
    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    };
    handleChangeDepartment = (e) => {
        this.setState({
            department: e.target.value,
        });
    };
    handleChangeStudentID = (e) => {
        this.setState({
            studentID: e.target.value,
        });
    };
    handleChangeRole = (e) => {
        this.setState({
            role: e.target.value,
        });
    };

    onSubmit = () => {
        console.log(JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            department: this.state.department,
            studentID: this.state.studentID,
            role: this.state.role,
        }));
        fetch(this.props.serverAddress + `SignUp`, {
            mode: 'cors',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                department: this.state.department,
                studentID: this.state.studentID,
                role: this.state.role,
            })
        })
            .then((response) => {
                if (response.status < 500) {
                    console.log("SignUp success")
                    window.location.href = "/Login";
                } else {
                    this.setState(
                        { err: 'Invalid credentials' }
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
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={this.handleChangeConfirmPassword} value={this.state.confirmPassword} type="password" name="confirmPassword" />
                <label htmlFor="email">Email</label>
                <input onChange={this.handleChangeEmail} value={this.state.email} type="text" name="email" />
                <label htmlFor="department">Department</label>
                <input onChange={this.handleChangeDepartment} value={this.state.department} type="text" name="department" />
                <label htmlFor="studentID">StudentID</label>
                <input onChange={this.handleChangeStudentID} value={this.state.studentID} type="text" name="studentID" />
                <label htmlFor="role">Role</label>
                <input onChange={this.handleChangeRole} value={this.state.role} type="text" name="role" />
                <button onClick={this.onSubmit}>Sign Up</button>
                <div>{this.state.err}</div>
            </div>
        );
    }
}

export default Sign_up;
