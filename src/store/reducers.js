import { combineReducers } from 'redux';
import { authReducer } from './Auth/reducers';
import { registrationReducer } from './Registration/reducers';
import { todoReducer } from "./Todo/reducers";

export default combineReducers({
    authReducer: authReducer,
    registrationReducer: registrationReducer,
    todoReducer: todoReducer
});