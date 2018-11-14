import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Footer from '../footer';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Footer />', () => {
    it('Renders without crashing', () => {
        shallow(
        <Provider store={store}>
            <Footer />
        </Provider>);
    })
});