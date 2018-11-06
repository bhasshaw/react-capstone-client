import {
    POST_DATE_SUCCESS,
    POST_DATE_ERROR,
    GET_DATES_SUCCESS,
    GET_DATES_ERROR
} from '../actions/protected-data';

const initialState = {
    dates: [],
    date: {
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
    if (action.type === POST_DATE_SUCCESS) {
        return Object.assign({}, state, {
            date: action.data,
            error: null
        });
    } else if (action.type === POST_DATE_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === GET_DATES_SUCCESS) {
        return Object.assign({}, state, {
            dates: action.data,
            error: null
        });
    } else if (action.type === GET_DATES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}