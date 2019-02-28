import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTrack, removeTrack } from "../../store/PlayList/actions";
import { selectTrack } from '../../store/PlayTrack/actions';
import PlayerListItem from "./PlayerListItem";
import PlayerAddTrackForm from "./PlayerAddTrackForm";

class PlayerContainer extends Component {

    render() {

        const { playlist } = this.props;

        return(
            <div>
                <div className="player-container">
                    <PlayerAddTrackForm addTrack={this.props.addTrack} />
                    <div className="player-container-list">
                        { playlist.map((track, key) => {
                            return <PlayerListItem
                                key={key}
                                track={track}
                                removeTrack={this.props.removeTrack}
                                selectTrack={this.props.selectTrack}
                            />
                        }) }
                    </div>
                </div>
            </div>
        )

    }

}

const mapStateToProps = (state) => {

    return {
        playlist: state.playListReducer
    }

};

const mapDispatchToProps = {

    addTrack: addTrack,
    removeTrack: removeTrack,
    selectTrack: selectTrack

};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);