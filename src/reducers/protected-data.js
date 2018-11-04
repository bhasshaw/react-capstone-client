import {
    POST_DATE_SUCCESS,
    POST_DATE_ERROR,
    GET_DATE_SUCCESS,
    GET_DATE_ERROR
} from '../actions/protected-data';

const initialState = {
    data: {
        id: null,
		street: null,
		city: null,
		state: null,
		zip: null,
		date: null,
		time: null
    },
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === POST_DATE_SUCCESS || GET_DATE_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === POST_DATE_ERROR || GET_DATE_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}