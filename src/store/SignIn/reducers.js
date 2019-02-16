import { LOGIN_USER } from "./actions";

const defaultState = {};

export const signInReducer = (state = defaultState, action) => {

    switch (action.type) {

        case LOGIN_USER:

            console.log(action.payload);


    }

    return state;

};