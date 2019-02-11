import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import './main.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import { saveState } from "./store/Todo/localStotage";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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