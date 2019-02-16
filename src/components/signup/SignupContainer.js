import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignupForm } from "./SignupForm";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { registrationUser } from "../../store/SignUp/actions";

class SignupContainer extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <Paper className="defaultFormWrap">
                <Typography variant="h2" gutterBottom>
                    Sign up
                </Typography>
                <SignupForm registrationUser={this.props.registrationUser} />
            </Paper>
        );

    }

}

const mapStateToProps = (state) => {

    return {
        test: 1
    }

};

const mapDispatchToProps = {

    registrationUser: registrationUser

};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);