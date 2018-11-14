import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import RegistrationPage from '../registration-page';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<RegistrationPage />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <RegistrationPage />
        </Provider>);
    })
});