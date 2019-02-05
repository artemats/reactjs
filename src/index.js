import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import './main.scss';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from "redux";

const initialState = [];

function playList(state = initialState, action) {

    if(action.type === 'ADD_TRACK') {

        return {
            ...state,
            tracks: [...state.tracks, action.payload]
        };

    }

    return state;

}

const tracksReducer = (state = initialState.tracks, action) => {

    switch (action.type) {
        case 'ADD_TRACK': {
            state = [...state, action.payload]
            break;
        }
    }

    return state;

};

const playlistsReducer = (state = initialState.playlists, action) => {

    return state;

};

const reducers = combineReducers({

    tracks: tracksReducer,
    playlists: playlistsReducer

});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));