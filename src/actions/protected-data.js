import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const POST_DATE_SUCCESS = 'POST_DATE_SUCCESS';
export const postDateSuccess = data => ({
    type: POST_DATE_SUCCESS,
    data
});

export const POST_DATE_ERROR = 'POST_DATE_ERROR';
export const postDateError = error => ({
    type: POST_DATE_ERROR,
    error
});

export const GET_DATE_SUCCESS = 'GET_DATE_SUCCESS';
export const getDateSuccess = data => ({
    type: GET_DATE_SUCCESS,
    data
});

export const GET_DATE_ERROR = 'GET_DATE_ERROR';
export const getDateError = error => ({
    type: GET_DATE_ERROR,
    error
});

export const postDate = (date) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/dates/date`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(date)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(postDateSuccess(data)))
        .catch(err => {
            dispatch(postDateError(err));
        });
};

export const getDate = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch (`${API_BASE_URL}/dates/date`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        },
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({data}) => dispatch(getDateSuccess(data)))
    .catch(err => {
        dispatch(getDateError(err));
    });
};