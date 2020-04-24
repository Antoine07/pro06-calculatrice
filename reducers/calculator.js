import {  ADD_NUMBER , RESET } from '../constants/actions';

const initialState = {
    number: 0
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case ADD_NUMBER:

            return {
                ...state,
                // 5 + 0 * 0 = 5
                // 1 + 5 * 10 = 51
                // 2 + 51 * 10 = 512
                number: action.payload + state.number * 10
            }

        case RESET:

            return {
                ...state,
                number: 0
            }

        default:
            return state;
    }
}