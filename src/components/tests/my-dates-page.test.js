import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import MyDogDatesPage from '../my-dates-page';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<MyDogDatesPage />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <MyDogDatesPage />
        </Provider>);
    })
});