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

export const postDate = (date) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/date`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
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