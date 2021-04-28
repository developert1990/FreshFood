import React from 'react';
import App from './App';
import { shallow } from './enzyme';

describe('App', () => {
    test('renders app', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper.debug())
    })
})
