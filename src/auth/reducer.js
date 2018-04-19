import { TYPE } from './actionTypes'

const initialState = {
    type: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case TYPE:
            return Object.assign({}, { type: action.value })
        default: return state;
    }
}