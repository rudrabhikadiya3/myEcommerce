import * as ActionType from '../ActionTypes'


export const signupAction = (values) => (dispatch) =>{
    dispatch({type: ActionType.SIGNUP_USER, payload: values})
}