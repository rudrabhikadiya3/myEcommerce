import * as ActionType from "../ActionTypes";

const initVal = {
  msg: "",
  color: "",
};
export const alertReducer = (state = initVal, action) => {
  switch (action.type) {
    case ActionType.SET_ALERT:
      return {
        ...state,
        msg: action.payload.msg,
        color: action.payload.color
      };
    case ActionType.RESET_ALERT:
      return {
        ...state,
        msg: "",
        color: ""
      };

    default:
      return state;
  }
};