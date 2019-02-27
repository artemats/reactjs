import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './main.scss';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';
import { saveState } from "./store/Todo/localStotage";
import { saveToLocalStorageUserData } from "./components/localStorage/authenticationStorage";
import { enCode } from "./components/JWTToken/enCode";
import { setLoggedInToLocalStorage } from "./components/localStorage/authenticationStorage";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe( () => {

    saveState({

        todoList: store.getState().todoReducer

    });

    saveToLocalStorageUserData(enCode(store.getState().userDataReducer));

    setLoggedInToLocalStorage(store.getState().isLoggedInReducer.isLoggedIn);

});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));