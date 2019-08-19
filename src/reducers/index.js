import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import queueForm from "./queueForm";

const allReducers = combineReducers({
    queueForm,
    form: formReducer
});

export const rootReducer = (state, action) => {
    if (action.type === "RESET_APP") {
      state = undefined;
    }
    return allReducers(state, action);
  };