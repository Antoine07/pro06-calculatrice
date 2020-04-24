import {
    ADD_NUMBER, 
    RESET
} from '../constants/actions';


export const addNumber = payload => {
    return {
        type: ADD_NUMBER, payload
    }
};

export const reset = () => {
    return {
        type: RESET
    }
};