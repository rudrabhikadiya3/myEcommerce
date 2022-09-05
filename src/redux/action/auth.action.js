import * as ActionType from '../ActionTypes'


export const signupAction = (values) => (dispatch) =>{
    dispatch({type: ActionType.SIGNUP_USER, payload: values})
}
export const loggedinAction = () => (dispatch) =>{
    dispatch({type: ActionType.LOGGEDIN_USER})
}
export const logoutAction = () => (dispatch) =>{
    dispatch({type: ActionType.LOGOUT_USER})
}
export const loggedoutAction = () => (dispatch) =>{
    dispatch({type: ActionType.LOGGEDOUT_USER})
}
export const loginAction = (values) => (dispatch) =>{
    dispatch({type: ActionType.LOGIN_USER, payload: values})
}

export const GoogleSigninAction = () => (dispatch) =>{
    dispatch({type: ActionType.GOOGLESIGNUP_USER})
}

export const resetPasswordAction = (email) => (dispatch) =>{
    dispatch({type: ActionType.RESET_PASSWORD_USER, payload: email})
}