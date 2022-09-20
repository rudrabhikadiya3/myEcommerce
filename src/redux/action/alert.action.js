import * as ActionType from '../ActionTypes'

export const setAlert = (alertData) => (dispatch) =>{
    dispatch({type : ActionType.SET_ALERT, payload: alertData})
}
export const resetAlert = () => (dispatch) =>{
    dispatch({type : ActionType.RESET_ALERT})
}