/* eslint-disable prettier/prettier */
import { INCREMENT, DECREMENT, INCREMENTBYVAL } from "./types"

export const increment = () => {
    console.log("Dispatching increment function");
    return {
        type: INCREMENT,
    }
}

export const decrement = () => {
    console.log("Dispatching decrement function");
    return {
        type: DECREMENT,
    }
}

export const incrementByVal = (value) => {
    console.log("Dispatching increment by val function");
    return {
        type: INCREMENTBYVAL,
        payload: value,
    }
}