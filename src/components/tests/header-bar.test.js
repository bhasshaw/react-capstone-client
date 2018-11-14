import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import HeaderBar from '../header-bar';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<HeaderBar />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <HeaderBar />
        </Provider>);
    })
});