import { REGISTRATION_USER } from "./actions";

const defaultState = {};

export const signUpReducer = (state = defaultState, action) => {

    switch (action.type) {

        case REGISTRATION_USER:

            return {
                ...state,
                id: action.payload.id,
                login: action.payload.login,
                email: action.payload.email,
                password: action.payload.password
            }

    }

    return state;

};