import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { Login } from "./Login";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Todo } from "./Todo";
import { PlayerContainer } from "./PlayerContainer";

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
        this.handleChangLoginStatus = this.handleChangLoginStatus.bind(this);
    }

    componentWillMount() {

        if(localStorage.getItem('loggedIn')) {

            this.setState({
                loggedIn: localStorage.getItem('loggedIn')
            });

        } else {

            localStorage.setItem('loggedIn', this.state.loggedIn);

        }

        console.log('app component will mount');

    }

    componentDidMount() {

        console.log('app component did mount')

    }

    componentWillUpdate(nextProps, nextState) {

        console.log('app component will update');

    }

    handleChangLoginStatus() {
        this.setState({
            loggedIn: !this.state.loggedIn
        });

        setTimeout(function () {

            localStorage.setItem('loggedIn', this.state.loggedIn);

        }.bind(this), 100);
    }

    render() {

        let { loggedIn } = this.state;

        loggedIn = JSON.parse(loggedIn);

        return(
            <BrowserRouter>
                <div>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <NavLink to="/" exact className="nav-link">
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </NavLink>
                            <NavLink to="/todo" exact className="nav-link">
                                <Typography variant="h6" color="inherit">
                                    Todo
                                </Typography>
                            </NavLink>
                            <NavLink to="/player" exact className="nav-link">
                                <Typography variant="h6" color="inherit">
                                    Player
                                </Typography>
                            </NavLink>
                            <NavLink to="/login" exact className="nav-link">
                                <Typography variant="h6" color="inherit">
                                    Login
                                </Typography>
                            </NavLink>
                            <NavLink to="/profile" exact className="nav-link">
                                <Typography variant="h6" color="inherit">
                                    Profile
                                </Typography>
                            </NavLink>
                            <div className="log-switcher">
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={loggedIn}
                                                onChange={this.handleChangLoginStatus}
                                                aria-label="LoginSwitch" />
                                        }
                                        label={loggedIn ? 'Logout' : 'Login'}
                                    />
                                </FormGroup>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route excat path="/todo" component={Todo} />
                        <Route excat path="/player" component={PlayerContainer} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" render={() => (
                            loggedIn ? (<Profile />) : <Redirect to="/login" />
                        )} />
                    </div>
                </div>
            </BrowserRouter>
        )

    }

}