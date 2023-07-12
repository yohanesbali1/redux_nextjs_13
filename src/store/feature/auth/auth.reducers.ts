import types from './auth.type'
import initialState from './auth.state'
export const authReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case types.TEST:
            console.log(action.payload)
            return {
                ...state
            };
        default:
            return state;
    }
}