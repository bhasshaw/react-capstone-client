import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import MyDogDates from '../my-dates-btn';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<MyDogDates />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <MyDogDates />
        </Provider>);
    })
});