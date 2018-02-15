import { SET_ALL_QUIZES } from '../actions/quiz'; 

const initialState = {
    quizes: null
}

export default function mainReducer(state = initialState, action) {
    if (action.type === SET_ALL_QUIZES) {
        return Object.assign({}, state, {
            quizes: action.quizes
        });
    }
    return state;
}
