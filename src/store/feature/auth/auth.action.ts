import types from './auth.type'
import { Dispatch } from 'react';
export const Test = (payload: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: types.TEST,
            payload: payload
        })
    } catch (e: any) {
        throw e.response.data;
    }
}