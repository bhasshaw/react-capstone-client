import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import AddDatePage from '../add-date-page';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<AddDatePage />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <AddDatePage />
        </Provider>);
    })
});