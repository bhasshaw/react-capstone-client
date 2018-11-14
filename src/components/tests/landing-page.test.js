import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import LandingPage from '../landing-page';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <LandingPage />
        </Provider>);
    })
});