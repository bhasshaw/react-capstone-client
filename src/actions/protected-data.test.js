import {
    POST_DATE_SUCCESS,
    postDateSuccess,
    POST_DATE_ERROR,
    postDateError,
    GET_DATES_SUCCESS,
    getDateSuccess,
    GET_DATES_ERROR,
    getDateError,
    GET_MY_DATES_SUCCESS,
    getMyDateSuccess,
    GET_MY_DATES_ERROR,
    getMyDateError,
    DELETE_DATE_SUCCESS,
    deleteDateSuccess,
    DELETE_DATE_ERROR,
    deleteDateError
} from './protected-data';

// POST TESTS

describe('postDateSuccess', () => {
    it('Should return the action', () => {
        const data = 'Adding date';
        const action = postDateSuccess(data);
        expect(action.type).toEqual(POST_DATE_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('postDateError', () => {
    it('Should return the action', () => {
        const error = 'Adding date error';
        const action = postDateError(error);
        expect(action.type).toEqual(POST_DATE_ERROR);
        expect(action.error).toEqual(error);
    });
});

// GET TESTS

describe('getDateSuccess', () => {
    it('Should return the action', () => {
        const data = 'Get dates';
        const action = getDateSuccess(data);
        expect(action.type).toEqual(GET_DATES_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('getDateError', () => {
    it('Should return the action', () => {
        const error = 'Adding date error';
        const action = getDateError(error);
        expect(action.type).toEqual(GET_DATES_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('getMyDateSuccess', () => {
    it('Should return the action', () => {
        const data = 'Get my dates';
        const action = getMyDateSuccess(data);
        expect(action.type).toEqual(GET_MY_DATES_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('getMyDateError', () => {
    it('Should return the action', () => {
        const error = 'Adding date error';
        const action = getMyDateError(error);
        expect(action.type).toEqual(GET_MY_DATES_ERROR);
        expect(action.error).toEqual(error);
    });
});

// DELETE TESTS

describe('deleteDateSuccess', () => {
    it('Should return the action', () => {
        const data = 'Delete my dates';
        const action = deleteDateSuccess(data);
        expect(action.type).toEqual(DELETE_DATE_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('deleteDateError', () => {
    it('Should return the action', () => {
        const error = 'Adding date error';
        const action = deleteDateError(error);
        expect(action.type).toEqual(DELETE_DATE_ERROR);
        expect(action.error).toEqual(error);
    });
});
