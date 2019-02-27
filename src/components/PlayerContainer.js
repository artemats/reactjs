import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import { PlayerList } from "./PlayerList";
import { Player } from "./Player";

export class PlayerContainer extends Component {

    render() {

        return(
            <div>
                <div className="player-container">
                    <Grid item xs={9}>
                        <PlayerList />
                    </Grid>
                    <Grid item xs={3}>
                        <Player />
                    </Grid>
                </div>
            </div>
        )

    }

}