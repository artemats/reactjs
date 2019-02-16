import { combineReducers } from 'redux';
import { authReducer } from './Auth/reducers';
import { registrationReducer } from './Registration/reducers';
import { todoReducer } from "./Todo/reducers";
import { signUpReducer } from "./SignUp/reducers";
import { signInReducer } from "./SignIn/reducers";

export default combineReducers({
    authReducer: authReducer,
    registrationReducer: registrationReducer,
    todoReducer: todoReducer,
    signUpReducer: signUpReducer,
    signInReducer: signInReducer
});