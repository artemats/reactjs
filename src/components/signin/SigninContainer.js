import React, { Component } from 'react';
import { SigninForm } from "./SigninForm";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class SigninContainer extends Component {

    render() {

        return (
            <Paper className="defaultFormWrap">
                <Typography variant="h2" gutterBottom>
                    Sign in
                </Typography>
                <SigninForm />
            </Paper>
        );

    }

}

export default SigninContainer;