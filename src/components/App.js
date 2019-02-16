import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Home } from "./Home";
import { Profile } from "./Profile";
import TodoContainer from "./TodoContainer";
import { PlayerContainer } from "./PlayerContainer";
import ReduxTemplate from './ReduxTemplate'
import SignupContainer from './signup/SignupContainer';
import SigninContainer from './signin/SigninContainer'
import UserSwitcher from './UserSwitcher';

export class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {

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
                            <NavLink to="/redux" exact className="nav-link">
                                <Typography variant="h6" color="inherit">
                                    Redux
                                </Typography>
                            </NavLink>
                            <UserSwitcher />
                        </Toolbar>
                    </AppBar>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route excat path="/todo" component={TodoContainer} />
                        <Route excat path="/player" component={PlayerContainer} />
                        {/*<Route exact path="/profile" render={() => (*/}
                            {/*loggedIn ? (<Profile />) : <Redirect to="/" />*/}
                        {/*)} />*/}
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/redux" component={ReduxTemplate} />
                        <Route exact path="/registration" component={SignupContainer} />
                        <Route exact path="/login" component={SigninContainer} />
                    </div>
                </div>
            </BrowserRouter>
        )

    }

}