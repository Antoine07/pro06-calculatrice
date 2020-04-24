
const initialState = {
    memory: []
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case 'ADD_MEMORY':

            return {
                ...state,
                memory: state.memory.contact( action.payload )
            }

        case 'RESET':

            return {
                ...state,
                number: []
            }

        default:
            return state;
    }
}