import {SELECT_TRACK} from "./actions";

const defaulState = {
    id: '',
    songTitle: '',
    authorTitle: '',
    trackUrl: '',
    songPreview: ''
};

export const playTrackReducer = (state = defaulState, action) => {

    switch (action.type) {

        case SELECT_TRACK:

            return {
                ...state,
                id: action.payload.id,
                songTitle: action.payload.songTitle,
                authorTitle: action.payload.authorTitle,
                trackUrl: action.payload.trackUrl,
                songPreview: action.payload.songPreview
            };

    }

    return state;

};