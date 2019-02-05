import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

class ReduxTemplate extends Component {

    constructor(props) {
        super(props);
        this.handleAddTrack = this.handleAddTrack.bind(this);
    }

    handleAddTrack(e) {

        e.preventDefault();

        this.props.onAddTrack(this.trackName.value);

        this.trackName.value = '';

    }

    render() {

        console.log(this.props.tracks);

        return(
            <div>
                <Paper className="defaultFormWrap">
                    <form autoComplete="off" onSubmit={this.handleAddTrack}>
                        <div className="form-container">
                            <input type="text" ref={(input) => {this.trackName = input}}/>
                            <div className="action-btn">
                                <IconButton aria-label="Send" type="submit">
                                    <SendIcon fontSize="small" />
                                </IconButton>
                            </div>
                        </div>
                    </form>
                    <List component="nav" className="track-list">
                        {this.props.tracks.map((track, key) => {
                            return <ListItem key={key}>{track}</ListItem>
                        })}
                    </List>
                </Paper>
            </div>
        )

    }

}

export default connect(
    state => ({
        tracks: state.tracks
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({
                type: 'ADD_TRACK',
                payload: trackName
            })
        }
    })
)(ReduxTemplate);