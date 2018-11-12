import {
    POST_DATE_SUCCESS,
    POST_DATE_ERROR,
    GET_DATES_SUCCESS,
    GET_DATES_ERROR,
    DELETE_DATE_SUCCESS,
    DELETE_DATE_ERROR
} from '../actions/protected-data';

const initialState = {
    dates: [],
    date: {
        id: null,
		park: null,
		date: null,
        startTime: null,
        endTime: null
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
    } else if (action.type === DELETE_DATE_SUCCESS) {
        return Object.assign({}, state, {
            dates: action.data,
            error: null
        });
    } else if (action.type === DELETE_DATE_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}