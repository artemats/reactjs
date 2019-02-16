import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

export class Home extends Component{

    render() {

        return(
            <div>
                <Paper className="profile-container __home-theme">
                    <Typography variant="h2" component="h2">
                        Welcome to testing app
                    </Typography>
                    <Divider className="profile-divider" />
                    <Typography variant="h6" component="h6">
                        I recommend signing up for convenience.
                    </Typography>
                    <div className="form-action center">
                        <NavLink to="/registration">
                            <Button variant="contained" color="primary">
                                Sign up
                            </Button>
                        </NavLink>
                    </div>
                    <div className="center space-top1">
                        <Typography variant="body2" gutterBottom>Already have account ?</Typography>
                        <NavLink to="/login">
                            <Button variant="contained" color="primary">
                                Sign in
                            </Button>
                        </NavLink>
                    </div>
                </Paper>
            </div>
        )

    }

}