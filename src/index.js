import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import './main.scss';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';
import { saveState } from "./store/Todo/localStotage";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe( () => {

    saveState({

        todoList: store.getState().todoReducer

    });

});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));