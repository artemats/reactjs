export const REGISTRATION_USER = 'REGISTRATION_USER';

export const registrationUser = (userData) => {

    return {

        type: REGISTRATION_USER,
        payload: userData

    }

};