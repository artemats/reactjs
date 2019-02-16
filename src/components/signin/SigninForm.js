import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export class SigninForm extends Component {

    render() {

        return(
            <form autoComplete="off">
                <FormControl fullWidth>
                    <InputLabel htmlFor="component-error">Email</InputLabel>
                    <Input
                        name="email"
                        value=""
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="component-error">Password</InputLabel>
                    <Input
                        name="password"
                        type="password"
                        value=""
                    />
                </FormControl>
                <div className="form-action">
                    <Button variant="contained" color="primary" type="submit">
                        Sign in
                    </Button>
                    <p>Don't have account ?</p>
                    <NavLink to="/registration">
                        <Button variant="contained" type="submit">
                            Sign up
                        </Button>
                    </NavLink>
                </div>
            </form>
        )

    }

}

SigninForm.propTypes = {

};