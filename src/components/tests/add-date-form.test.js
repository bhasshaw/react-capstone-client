import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import AddDateForm from '../add-date-form';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<AddDateForm />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <AddDateForm />
        </Provider>);
    })
});