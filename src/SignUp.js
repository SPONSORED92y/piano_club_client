import React, { Component } from "react";

class Sign_up extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            department: '',
            studentID: '',
            role: '',
        };
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
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
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
                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

export default Sign_up;
