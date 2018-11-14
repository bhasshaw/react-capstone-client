import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import FindDate from '../find-date-btn';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<FindDate />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <FindDate />
        </Provider>);
    })
});