import * as ActionType from '../ActionTypes'


export const testAction = () => (dispatch) =>{
    dispatch({type: ActionType.TEST_REDUX})
}