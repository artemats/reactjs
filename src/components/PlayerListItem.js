import React, { Component } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

export class PlayerListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { audioItem } = this.props;

        return(
            <div>
                <ListItem alignItems="flex-start" button={true}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={audioItem.songPreview} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={audioItem.songTitle}
                        secondary={audioItem.songAuthTitle}
                    />
                </ListItem>
                <Divider />
            </div>
        )

    }

}