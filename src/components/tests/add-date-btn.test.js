import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import AddDate from '../add-date-btn';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<AddDate />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <AddDate />
        </Provider>);
    })
});