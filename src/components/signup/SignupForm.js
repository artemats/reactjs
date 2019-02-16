import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const defaultState = {
    login: '',
    email: '',
    password: '',
    loginError: '',
    emailError: '',
    passwordError: ''
};

export class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = defaultState;

        this.handleRegistrationUser = this.handleRegistrationUser.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleChangeValue(event) {

        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleRegistrationUser(event) {

        event.preventDefault();

        let user = {};

        if(this.onValidateForm()) {

            user.id = Date.now().toString();
            user.login = this.state.login;
            user.email = this.state.email;
            user.password = this.state.password;

            this.props.registrationUser(user);

            this.setState(defaultState);

        }

    }

    onValidateForm() {

        let loginError = '';
        let emailError = '';
        let passwordError = '';

        if(this.state.login.length < 4) {

            loginError = 'Login must have more than 4 characters'

        }

        if(!this.state.email.includes('@')) {

            emailError = 'Email must include "@"';

        }

        if(this.state.password.length < 6) {

            passwordError = 'Password must have more than 6 characters';

        }

        if(loginError || emailError || passwordError) {

            this.setState({
                loginError,
                emailError,
                passwordError
            });

            return false;

        }

        return true;

    }

    render() {

        return(
            <form autoComplete="off" onSubmit={this.handleRegistrationUser}>
                <FormControl error={Boolean(this.state.loginError)} fullWidth>
                    <InputLabel htmlFor="component-error">Login</InputLabel>
                    <Input
                        name="login"
                        value={this.state.login}
                        onChange={this.handleChangeValue}
                    />
                    <FormHelperText id="component-error-text">{this.state.loginError}</FormHelperText>
                </FormControl>
                <FormControl error={Boolean(this.state.emailError)} fullWidth>
                    <InputLabel htmlFor="component-error">Email</InputLabel>
                    <Input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChangeValue}
                    />
                    <FormHelperText id="component-error-text">{this.state.emailError}</FormHelperText>
                </FormControl>
                <FormControl error={Boolean(this.state.passwordError)} fullWidth>
                    <InputLabel htmlFor="component-error">Password</InputLabel>
                    <Input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChangeValue}
                    />
                    <FormHelperText id="component-error-text">{this.state.passwordError}</FormHelperText>
                </FormControl>
                <div className="form-action">
                    <Button variant="contained" color="primary" type="submit">
                        Sign up
                    </Button>
                    <p>Already have account ?</p>
                    <NavLink to="/login">
                        <Button variant="contained" type="submit">
                            Sign in
                        </Button>
                    </NavLink>
                </div>
            </form>
        )

    }

}

SignupForm.propTypes = {
    registrationUser: PropTypes.func
};