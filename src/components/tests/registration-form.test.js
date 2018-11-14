import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import RegistrationForm from '../registration-form';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<RegistrationForm />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <RegistrationForm />
        </Provider>);
    })
});