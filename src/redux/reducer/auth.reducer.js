import * as ActionType from "../ActionTypes";

const initVal = {
  data: null,
};
export const authReducer = (state = initVal, action) => {
  switch (action.type) {
    case ActionType.LOGGEDIN_USER:
      return {
        ...state,
        data: action.payload,
      };
    case ActionType.LOGGEDOUT_USER:
      return {
        ...state,
        data: null,
      };

    default:
      return state;
  }
};
