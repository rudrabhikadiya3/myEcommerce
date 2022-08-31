import * as ActionType from '../ActionTypes'


export const signupAction = (values) => (dispatch) =>{
    dispatch({type: ActionType.SIGNUP_USER, payload: values})
}
export const loginAction = (values) => (dispatch) =>{
    dispatch({type: ActionType.LOGIN_USER, payload: values})
}