import * as types from "../actions/constants";

const queueForm = (
    state = {
        message: null
    },
    action
) => {
    switch(action.type) {
        case types.SET_QUEUE_MESSAGE:
            return Object.assign({}, state, { message: action.payload.message});
        default:
            return state;
    }
}

export default queueForm;