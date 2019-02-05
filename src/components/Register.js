import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            login: '',
            password: '',
            rPassword: '',
            email: '',
            countries: [],
            country: '',
            city: '',
            phone: ''
        };
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.onSubmitRegisterData = this.onSubmitRegisterData.bind(this);
    }

    componentWillMount() {

        fetch('https://restcountries.eu/rest/v2/all')
            .then(responce => responce.json())
            .then(responce => {
                this.setState({
                    countries: responce
                });
            })
            .catch(error => console.log('wrong in parse - ', error));

    }

    handleChangeValue(event) {

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleChangeStatus(event) {

        this.setState({
            [event.target.value]: event.target.checked
        });

    };

    onSubmitRegisterData(event) {

        let user = {};

        event.preventDefault();

        user.name = this.state.name;
        user.login = this.state.login;
        user.password = this.state.password;
        user.email = this.state.email;
        user.country = this.state.country;
        user.city = this.state.city;
        user.phone = this.state.phone;

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
                            label="Ім'я"
                            name="name"
                            margin="normal"
                            value={this.state.name}
                            onChange={this.handleChangeValue}
                            fullWidth
                        />
                        <TextField
                            label="Логін"
                            name="login"
                            margin="normal"
                            value={this.state.login}
                            onChange={this.handleChangeValue}
                            fullWidth
                        />
                        <TextField
                            label="Пароль"
                            name="password"
                            margin="normal"
                            value={this.state.password}
                            onChange={this.handleChangeValue}
                            fullWidth
                            type="password"
                        />
                        <TextField
                            label="Підтвердіть пароль"
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
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Країна</InputLabel>
                            <Select
                                native
                                value={this.state.country || ''}
                                name="country"
                                onChange={this.handleChangeValue}
                            >
                                <option value="" disabled />
                                { this.state.countries.map((country, key) => {
                                    return <option key={key} value={country.alpha2Code}>{country.name}</option>
                                }) }
                            </Select>
                        </FormControl>
                        <TextField
                            label="Місто"
                            name="city"
                            margin="normal"
                            value={this.state.city}
                            onChange={this.handleChangeValue}
                            fullWidth
                            type="text"
                        />
                        <TextField
                            label="Номер телефону"
                            name="phone"
                            margin="normal"
                            value={this.state.phone}
                            onChange={this.handleChangeValue}
                            fullWidth
                            type="tel"
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