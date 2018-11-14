import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import FindDatePage from '../find-date-page';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<FindDatePage />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <FindDatePage />
        </Provider>);
    })
});