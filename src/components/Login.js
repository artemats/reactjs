import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {

        console.log('form did mount');

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLogin(e) {

        e.preventDefault();
        let user = {};

        user.name = this.state.username;
        user.password = this.state.password;

        localStorage.setItem('userData', JSON.stringify(user));

        console.log(localStorage.getItem('userData'));

    }

    render() {

        return (
            <div>
                <Paper className="loginFormWrap">
                    <Typography variant="h2" gutterBottom>
                        Login
                    </Typography>
                    <form autoComplete="off" onSubmit={this.handleLogin}>
                        <TextField
                            label="Username"
                            name="username"
                            margin="normal"
                            fullWidth
                            value={this.state.username || ''}
                            onChange={this.handleChange}
                        />
                        <TextField
                            label="Password"
                            name="password"
                            margin="normal"
                            fullWidth
                            type="password"
                            value={this.state.password || ''}
                            onChange={this.handleChange}
                        />
                        <div className="form-action">
                            <Button variant="contained" color="primary" type="submit">
                                Submit data
                            </Button>
                        </div>
                    </form>
                </Paper>
            </div>
        )

    }

}