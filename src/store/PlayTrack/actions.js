export const SELECT_TRACK = 'SELECT_TRACK';

export const selectTrack = (track) => {

    return {

        type: SELECT_TRACK,
        payload: track

    }

};