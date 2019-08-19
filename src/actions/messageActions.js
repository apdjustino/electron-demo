import * as types from "./constants";

export const setMessageList = value => {
    return {
        type: types.SET_QUEUE_MESSAGE,
        payload: {
            messageList: value
        }
    }
}