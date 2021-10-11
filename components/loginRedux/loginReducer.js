/* eslint-disable prettier/prettier */
import { LOGIN, LOGOUT } from './loginTypes';
const initialState = {
    login: {},
    isLoggedIn: false,
};


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: console.log('LOGIN action');
        case LOGOUT: console.log('LOGOUT action');
        default: return state;
    }
};

export default loginReducer;