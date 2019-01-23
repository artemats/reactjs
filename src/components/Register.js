import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            rPassword: '',
            email: ''
        };
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.onSubmitRegisterData = this.onSubmitRegisterData.bind(this);
    }

    handleChangeValue(event) {

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    onSubmitRegisterData(event) {

        let user = {};

        event.preventDefault();

        user.username = this.state.username;
        user.password = this.state.password;
        user.email = this.state.email;

        console.log(user);

    }

    render() {

        return(
            <div>
                <Paper className="loginFormWrap">
                    <Typography variant="h2" gutterBottom>
                        Sign up
                    </Typography>
                    <form autoComplete="off" onSubmit={this.onSubmitRegisterData}>
                        <TextField
                            label="Username"
                            name="username"
                            margin="normal"
                            value={this.state.username}
                            onChange={this.handleChangeValue}
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            name="password"
                            margin="normal"
                            value={this.state.password}
                            onChange={this.handleChangeValue}
                            fullWidth
                            type="password"
                        />
                        <TextField
                            label="Repeat password"
                            name="rPassword"
                            margin="normal"
                            value={this.state.rPassword}
                            onChange={this.handleChangeValue}
                            fullWidth
                            type="password"
                        />
                        <TextField
                            label="E-mail"
                            name="email"
                            margin="normal"
                            value={this.state.email}
                            onChange={this.handleChangeValue}
                            fullWidth
                            type="email"
                        />
                        <div className="form-action">
                            <Button variant="contained" color="primary" type="submit">
                                Sign up
                            </Button>
                            <NavLink to="/login" color="primary" className="nav-link __link-theme">
                                Already have account?
                            </NavLink>
                        </div>
                    </form>
                </Paper>
            </div>
        )

    }

}