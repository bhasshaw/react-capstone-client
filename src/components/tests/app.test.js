import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from '../app';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<App />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <App />
        </Provider>);
    })
});