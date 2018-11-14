import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import LoginForm from '../login-form';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <LoginForm />
        </Provider>);
    })
});