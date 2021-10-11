/* eslint-disable prettier/prettier */
import { LOGIN, LOGOUT } from "./loginTypes";

export const loginAuth = () => {
    return {
        type: LOGIN,
    }
}

export const LogOutAuth = () => {
    return {
        type: LOGOUT,
    }
}