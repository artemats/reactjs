import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export class Home extends Component{

    render() {

        return(
            <div>
                <Paper className="profile-container __home-theme">
                    <Typography variant="h2" component="h2">
                        Welcome in testing app
                    </Typography>
                </Paper>
            </div>
        )

    }

}