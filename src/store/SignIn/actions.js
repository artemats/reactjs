export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = (userData) => {

    return {

        type: LOGIN_USER,
        payload: userData

    }

};