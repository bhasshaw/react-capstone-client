import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Input from '../input';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Input />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <Input />
        </Provider>);
    })
});