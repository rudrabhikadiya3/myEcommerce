import * as ActionType from '../ActionTypes'


const initVal = {
    data : ''
}
export const authReducer  = (state = initVal, action) =>{
    switch (action.type) {
        case ActionType.TEST_REDUX:
            return{
                ...state,
                data : "BTN CLICKED"
            }
    
        default: return state;
    }
}