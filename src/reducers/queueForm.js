import * as types from "../actions/constants";

const queueForm = (
    state = {
        messageList: []
    },
    action
) => {
    switch(action.type) {
        case types.SET_QUEUE_MESSAGE:
            return Object.assign({}, state, { messageList: action.payload.messageList});
        default:
            return state;
    }
}

export default queueForm;