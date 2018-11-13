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

export const GET_DATES_SUCCESS = 'GET_DATES_SUCCESS';
export const getDateSuccess = data => ({
    type: GET_DATES_SUCCESS,
    data
});

export const GET_DATES_ERROR = 'GET_DATES_ERROR';
export const getDateError = error => ({
    type: GET_DATES_ERROR,
    error
});

export const GET_MY_DATES_SUCCESS = 'GET_MY_DATES_SUCCESS';
export const getMyDateSuccess = data => ({
    type: GET_MY_DATES_SUCCESS,
    data
});

export const GET_MY_DATES_ERROR = 'GET_MY_DATES_ERROR';
export const getMyDateError = error => ({
    type: GET_MY_DATES_ERROR,
    error
});

export const DELETE_DATE_SUCCESS = 'DELETE_DATE_SUCCESS';
export const deleteDateSuccess = data => ({
    type: DELETE_DATE_SUCCESS,
    data
});

export const DELETE_DATE_ERROR = 'DELETE_DATE_ERROR';
export const deleteDateError = error => ({
    type: DELETE_DATE_ERROR,
    error
});

export const getDates = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch (`${API_BASE_URL}/dates/date`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json"
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => dispatch(getDateSuccess(data)))
    .catch(err => {
        dispatch(getDateError(err));
    });
};

export const getMyDates = () => (dispatch, getState) => {
    const user = getState().auth.currentUser.username;
    const authToken = getState().auth.authToken;
    return fetch (`${API_BASE_URL}/dates/date/${user}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json"
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(getMyDateSuccess(data)))
    .catch(err => {
        dispatch(getMyDateError(err));
    });
};

export const postDate = (date) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const user = getState().auth.currentUser.username;
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
    .then(data => dispatch(postDateSuccess(user)))
    .catch(err => {
        dispatch(postDateError(err));
    });
};

export const deleteDate = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch (`${API_BASE_URL}/dates/date/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(deleteDateSuccess(data)))
    .catch(err => {
        dispatch(deleteDateError(err));
    });
}