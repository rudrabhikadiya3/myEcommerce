import * as ActionType from '../ActionTypes'

export const setAlert = (alertData) => (dispatch) =>{
    console.log(alertData);
    dispatch({type : ActionType.SET_ALERT, payload: alertData})
}
export const resetAlert = () => (dispatch) =>{
    dispatch({type : ActionType.RESET_ALERT})
}