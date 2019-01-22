import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export class Profile extends Component {

    render() {

        return(
            <div>
                <Paper className="profile-container">
                    <Typography variant="h2" component="h2">
                        Profile page
                    </Typography>
                    <Divider light className="profile-divider" />
                    <Typography variant="h4" component="h4">
                        Welcome Arte
                    </Typography>
                </Paper>
            </div>
        )

    }

}